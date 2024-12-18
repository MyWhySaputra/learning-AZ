import { useState, useEffect } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { TreeNode } from "primereact/treenode";
import { NodeService } from "./dataService";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";

export default function Table2() {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
  const [newNodeData, setNewNodeData] = useState({
    nama_lengkap: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    agama: "",
    pendidikan: "",
    status: "",
    parentKey: "",
  });

  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );

  const [globalFilter, setGlobalFilter] = useState("");
  const [deleteOption, setDeleteOption] = useState<
    "withChildren" | "keepChildren"
  >("withChildren");

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  const date = `${Date.now()}`;

  const getAllNodesAsOptions = (
    treeNodes: TreeNode[]
  ): { label: string; value: string }[] => {
    const options: { label: string; value: string }[] = [];

    const traverse = (nodes: TreeNode[]) => {
      nodes.forEach((node) => {
        options.push({
          label: node.data.nama_lengkap,
          value: node.key?.toString() || "",
        });
        if (node.children) {
          traverse(node.children);
        }
      });
    };

    traverse(treeNodes);
    return [{ label: "No Parent", value: date }, ...options];
  };

  // Fungsi untuk memperbarui node dalam tree secara rekursif
  const updateNode = (
    treeNodes: TreeNode[],
    updatedNode: TreeNode
  ): TreeNode[] => {
    return treeNodes.map((node) => {
      if (node.key === updatedNode.key) {
        return { ...node, data: { ...updatedNode.data } };
      }
      if (node.children) {
        return { ...node, children: updateNode(node.children, updatedNode) };
      }
      return node;
    });
  };

  // Fungsi untuk menghapus node dengan atau tanpa child
  const deleteNode = (
    treeNodes: TreeNode[],
    keyToDelete: string,
    keepChildren: boolean
  ): TreeNode[] => {
    return treeNodes.flatMap((node) => {
      if (node.key === keyToDelete) {
        // Pilihan: Pertahankan child atau hapus semuanya
        return keepChildren && node.children ? node.children : [];
      }
      return {
        ...node,
        children: node.children
          ? deleteNode(node.children, keyToDelete, keepChildren)
          : undefined,
      };
    });
  };

  const addNode = (
    nodes: TreeNode[],
    parentKey: string,
    newNode: TreeNode
  ): TreeNode[] => {
    if (parentKey === options[0].value) {
      // Tambahkan sebagai root node
      return [...nodes, newNode];
    }

    return nodes.map((node) => {
      if (node.key === parentKey) {
        return {
          ...node,
          children: [...(node.children || []), newNode],
        };
      }

      if (node.children) {
        return {
          ...node,
          children: addNode(node.children, parentKey, newNode),
        };
      }

      return node;
    });
  };

  const handleaddmodal = () => {
    setCreateModalVisible(true);
    setOptions(getAllNodesAsOptions(nodes));
  };

  const handleEdit = (node: TreeNode) => {
    setSelectedNode(node);
    setEditModalVisible(true);
  };

  const handleDelete = (node: TreeNode) => {
    setSelectedNode(node);
    setDeleteModalVisible(true);
  };

  const handleCreate = () => {
    const newKey = date; // Buat key unik untuk node baru
    const newNode: TreeNode = {
      key: newKey,
      data: {
        nama_lengkap: newNodeData.nama_lengkap,
        jenis_kelamin: newNodeData.jenis_kelamin,
        tanggal_lahir: newNodeData.tanggal_lahir,
        agama: newNodeData.agama,
        pendidikan: newNodeData.pendidikan,
        status: newNodeData.status,
      },
      children: [],
    };

    setNodes((prevNodes) =>
      addNode(prevNodes, newNodeData.parentKey || date, newNode)
    );

    setCreateModalVisible(false);
    setNewNodeData({
      nama_lengkap: "",
      jenis_kelamin: "",
      tanggal_lahir: "",
      agama: "",
      pendidikan: "",
      status: "",
      parentKey: "", // Reset parentKey ke value "No Parent"
    });
  };

  const saveEdit = () => {
    if (selectedNode) {
      setNodes((prevNodes) => updateNode(prevNodes, selectedNode));
    }
    setEditModalVisible(false);
  };

  const confirmDelete = () => {
    if (selectedNode) {
      setNodes((prevNodes) =>
        deleteNode(
          prevNodes,
          String(selectedNode.key!),
          deleteOption === "keepChildren"
        )
      );
    }
    setDeleteModalVisible(false);
  };

  const actionTemplate = (node: TreeNode) => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          icon="pi pi-pencil"
          severity="warning"
          rounded
          onClick={() => handleEdit(node)}
        />
        <Button
          type="button"
          icon="pi pi-trash"
          severity="danger"
          rounded
          onClick={() => handleDelete(node)}
        />
      </div>
    );
  };
  const getHeader = () => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="w-full md:w-1/2">
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText
              type="search"
              onInput={(e) => {
                const inputElement = e.target as HTMLInputElement;
                if (inputElement) {
                  setGlobalFilter(inputElement.value);
                }
              }}
              placeholder="Search"
              className="w-full md:w-9/12"
            />
          </IconField>
        </div>
        <div className="w-full md:w-1/2 text-right">
          <Button
            type="button"
            label="Create"
            icon="pi pi-plus"
            className="p-button-success w-full md:w-auto"
            onClick={() => handleaddmodal()}
          />
        </div>
      </div>
    );
  };

  const header = getHeader();

  return (
    <div className="card">
      <TreeTable
        value={nodes}
        removableSort
        stateKey="tree-table-state-demo-session"
        stateStorage="session"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        filterMode="strict"
        globalFilter={globalFilter}
        header={header}
        emptyMessage="No data found."
        className="w-full"
        scrollable
        scrollHeight="flex"
      >
        <Column
          field="nama_lengkap"
          header="Nama Lengkap"
          expander
          sortable
          style={{ width: "190px" }}
          headerStyle={{ backgroundColor: "#E1F0DA", width: "190px" }}
        ></Column>
        <Column
          field="jenis_kelamin"
          header="Jenis Kelamin"
          sortable
          style={{ width: "170px" }}
          headerStyle={{ backgroundColor: "#E1F0DA", width: "170px" }}
        ></Column>
        <Column
          field="tanggal_lahir"
          header="Tanggal Lahir"
          sortable
          style={{ width: "170px" }}
          headerStyle={{ backgroundColor: "#E1F0DA", width: "170px" }}
        ></Column>
        <Column
          field="agama"
          header="Agama"
          sortable
          style={{ width: "120px" }}
          headerStyle={{ backgroundColor: "#E1F0DA", width: "120px" }}
        ></Column>
        <Column
          field="pendidikan"
          header="Pendidikan"
          style={{ width: "150px" }}
          headerStyle={{ backgroundColor: "#E1F0DA", width: "150px" }}
          sortable
        ></Column>
        <Column
          field="status"
          style={{ width: "120px" }}
          header="Status"
          sortable
          headerStyle={{ backgroundColor: "#E1F0DA", width: "120px" }}
        ></Column>
        <Column
          header="Action"
          style={{ width: "140px" }}
          body={actionTemplate}
          headerStyle={{ backgroundColor: "#E1F0DA", width: "140px" }}
        />
      </TreeTable>

      {/* Edit Modal */}
      <Dialog
        header="Edit Data"
        visible={isEditModalVisible}
        className="w-full mx-4 lg:w-4"
        style={{ width: '30rem' }}
        modal
        onHide={() => setEditModalVisible(false)}
      >
        <div className="flex flex-col gap-2 mb-3">
          <span>Nama Lengkap</span>
          <InputText
            value={selectedNode?.data?.nama_lengkap || ""}
            onChange={(e) =>
              setSelectedNode((prev) => ({
                ...prev!,
                data: { ...prev!.data, nama_lengkap: e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Jenis Kelamin</span>
          <Dropdown
            value={selectedNode?.data?.jenis_kelamin || ""}
            onChange={(e) =>
              setSelectedNode((prev) => ({
                ...prev!,
                data: { ...prev!.data, jenis_kelamin: e.value },
              }))
            }
            options={[
              { label: "Laki-Laki", value: "Laki-laki" },
              { label: "Perempuan", value: "Perempuan" },
            ]}
            optionLabel="label"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Tanggal Lahir</span>
          <Calendar
            value={
              selectedNode?.data?.tanggal_lahir
                ? new Date(selectedNode.data.tanggal_lahir)
                : null
            }
            onChange={(e) => {
              const date = e.value;
              const formattedDate = date?.getFullYear()
                ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
                    2,
                    "0"
                  )}-${String(date.getDate()).padStart(2, "0")}`
                : null;

              setSelectedNode((prev) => ({
                ...prev!,
                data: { ...prev!.data, tanggal_lahir: formattedDate },
              }));
            }}
            dateFormat="yy-mm-dd"
            showIcon
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Agama</span>
          <InputText
            value={selectedNode?.data?.agama || ""}
            onChange={(e) =>
              setSelectedNode((prev) => ({
                ...prev!,
                data: { ...prev!.data, agama: e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Pendidikan</span>
          <InputText
            value={selectedNode?.data?.pendidikan || ""}
            onChange={(e) =>
              setSelectedNode((prev) => ({
                ...prev!,
                data: { ...prev!.data, pendidikan: e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Status</span>
          <InputText
            value={selectedNode?.data?.status || ""}
            onChange={(e) =>
              setSelectedNode((prev) => ({
                ...prev!,
                data: { ...prev!.data, status: e.target.value },
              }))
            }
          />
        </div>
        <div className="mt-4">
          <Button
            label="Save"
            icon="pi pi-check"
            className="p-button-success"
            onClick={saveEdit}
          />
          <Button
            label="Cancel"
            icon="pi pi-times"
            className="p-button-info ml-2"
            onClick={() => setEditModalVisible(false)}
          />
        </div>
      </Dialog>

      {/* Delete Modal */}
      <Dialog
        header="Confirm Delete"
        visible={isDeleteModalVisible}
        className="w-full mx-4 lg:w-4"
        style={{ width: '30rem' }}
        modal
        onHide={() => setDeleteModalVisible(false)}
      >
        <p>
          Are you sure you want to delete{" "}
          <b>{selectedNode?.data?.nama_lengkap}</b>?
        </p>
        {selectedNode?.children && selectedNode.children.length > 0 && (
          <div className="mt-6">
            <p className="mb-2">
              This node has children. What do you want to do?
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex align-items-center">
                <RadioButton
                  name="delete"
                  value="withChildren"
                  onChange={() => setDeleteOption("withChildren")}
                  checked={deleteOption === "withChildren"}
                />
                <label className="ml-2">
                    Delete with Children
                </label>
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  name="delete"
                  value="keepChildren"
                  onChange={() => setDeleteOption("keepChildren")}
                  checked={deleteOption === "keepChildren"}
                />
                <label className="ml-2">
                    Keep Children
                </label>
              </div>
              {/* <Button
                label="Delete with Children"
                icon="pi pi-trash"
                className="p-button-danger"
                onClick={() => setDeleteOption("withChildren")}
              />
              <Button
                label="Keep Children"
                icon="pi pi-arrow-up"
                className="p-button-success"
                onClick={() => setDeleteOption("keepChildren")}
              /> */}
            </div>
          </div>
        )}
        <div className="mt-4">
          <Button
            label="Confirm"
            icon="pi pi-check"
            severity="success"
            onClick={confirmDelete}
          />
          <Button
            label="Cancel"
            icon="pi pi-times"
            severity="info"
            className="ml-2"
            onClick={() => setDeleteModalVisible(false)}
          />
        </div>
      </Dialog>

      {/* Create Modal */}
      <Dialog
        header="Add New Node"
        visible={isCreateModalVisible}
        className="w-full mx-4 lg:w-4"
        style={{ width: '30rem' }}
        modal
        onHide={() => setCreateModalVisible(false)}
      >
        <div className="flex flex-col gap-2 mb-3">
          <span>Pilih Parent</span>
          <Dropdown
            value={newNodeData.parentKey}
            onChange={(e) =>
              setNewNodeData({ ...newNodeData, parentKey: e.value })
            }
            options={options}
            optionLabel="label"
            placeholder="Select Parent"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Nama Lengkap</span>
          <InputText
            value={newNodeData.nama_lengkap}
            onChange={(e) =>
              setNewNodeData({ ...newNodeData, nama_lengkap: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Jenis Kelamin</span>
          <Dropdown
            value={newNodeData.jenis_kelamin}
            onChange={(e) =>
              setNewNodeData({ ...newNodeData, jenis_kelamin: e.value })
            }
            options={[
              { label: "Laki-Laki", value: "Laki-laki" },
              { label: "Perempuan", value: "Perempuan" },
            ]}
            optionLabel="label"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Tanggal Lahir</span>
          <Calendar
            value={
              newNodeData.tanggal_lahir
                ? new Date(newNodeData.tanggal_lahir)
                : null
            }
            onChange={(e) => {
              const date = e.value;
              const formattedDate = date?.getFullYear()
                ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
                    2,
                    "0"
                  )}-${String(date.getDate()).padStart(2, "0")}`
                : null;
              setNewNodeData({
                ...newNodeData,
                tanggal_lahir: formattedDate || "",
              });
            }}
            dateFormat="yy-mm-dd"
            showIcon
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Agama</span>
          <InputText
            value={newNodeData.agama}
            onChange={(e) =>
              setNewNodeData({ ...newNodeData, agama: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Pendidikan</span>
          <InputText
            value={newNodeData.pendidikan}
            onChange={(e) =>
              setNewNodeData({ ...newNodeData, pendidikan: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <span>Status</span>
          <InputText
            value={newNodeData.status}
            onChange={(e) =>
              setNewNodeData({ ...newNodeData, status: e.target.value })
            }
          />
        </div>
        <div className="mt-4">
          <Button
            label="Add"
            icon="pi pi-check"
            className="p-button-success"
            onClick={handleCreate}
          />
          <Button
            label="Cancel"
            icon="pi pi-times"
            className="p-button-info ml-2"
            onClick={() => setCreateModalVisible(false)}
          />
        </div>
      </Dialog>
    </div>
  );
}
