import { Checkbox } from "primereact/checkbox";
import { TabView, TabPanel } from "primereact/tabview";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";

export const Menu = () => {
  const [selectedMaintainAccount, setSelectedMaintainAccount] = useState<
    string[]
  >(["view", "create", "update", "delete", "export", "import"]);
  const [selectedJournalEntry, setSelectedJournalEntry] = useState<string[]>([
    "view",
    "create",
    "update",
    "delete",
    "export",
    "import",
  ]);
  const [
    selectedJournalofTransactionListing,
    setSelectedJournalofTransactionListing,
  ] = useState<string[]>(["export", "import"]);
  const [selectedProfitLossStatement, setSelectedProfitLossStatement] =
    useState<string[]>(["export", "import"]);
  const [selectedBalanceSheet, setSelectedBalanceSheet] = useState<string[]>([
    "export",
    "import",
  ]);
  const [selectedTrialBalance, setSelectedTrialBalance] = useState<string[]>([
    "export",
    "import",
  ]);
  const [selectedLedgerReport, setSelectedLedgerReport] = useState<string[]>([
    "export",
    "import",
  ]);
  const [selectedCashFlowStatement, setSelectedCashFlowStatement] = useState<
    string[]
  >(["export", "import"]);

  const adminOption = [
    { name: "View", value: "view" },
    { name: "Create", value: "create" },
    { name: "Update", value: "update" },
    { name: "Delete", value: "delete" },
    { name: "Export", value: "export" },
    { name: "Import", value: "import" },
  ];

  interface Option {
    label: string;
    icon: string;
    value: JSX.Element;
  }

  // Menu options dengan elemen JSX
  const menuOptions: Option[] = [
    {
      label: "GeneralLedger",
      icon: "pi-home",
      value: (
        <div className="p-1 lg:p-4 lg:h-[60vh]">
          <h3 className="text-lg font-bold mb-2 lg:text-start text-center">General Ledger</h3>
          <div className="flex flex-col lg:flex-row w-full lg:text-center">
            <div className="w-full lg:w-1/2">
              <h2 className="lg:text-lg font-bold mb-4 text-center">Sub Menu</h2>
              <div className="flex flex-col lg:flex-row mb-3 lg:mr-4">
                <label className="flex font-medium text-xs lg:text-lg w-full lg:w-1/4 items-center mb-1 lg:mb-0">
                  Maintain Account
                </label>
                <MultiSelect
                  value={selectedMaintainAccount}
                  onChange={(e) => setSelectedMaintainAccount(e.value)}
                  options={adminOption}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Options"
                  className="w-full text-xs"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-2 lg:mr-4">
                <label className="flex font-medium text-xs lg:text-lg w-full lg:w-1/4 items-center mb-1 lg:mb-0">
                  Journal Entry
                </label>
                <MultiSelect
                  value={selectedJournalEntry}
                  onChange={(e) => setSelectedJournalEntry(e.value)}
                  options={adminOption}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Options"
                  className="w-full text-xs"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="lg:text-lg font-bold mb-4 text-center">Report</h2>
              <div className="flex flex-col lg:flex-row mb-3 lg:mr-4">
                <label className="flex font-medium text-xs lg:text-lg w-full lg:w-7/12 items-center mb-1 lg:mb-0">
                  Print Journal of Transaction Listing
                </label>
                <MultiSelect
                  value={selectedJournalofTransactionListing}
                  onChange={(e) =>
                    setSelectedJournalofTransactionListing(e.value)
                  }
                  options={adminOption}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Options"
                  className="w-full text-xs"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-3 lg:mr-4">
                <label className="flex font-medium text-xs lg:text-lg w-full lg:w-7/12 items-center mb-1 lg:mb-0">
                  Print Profit & Loss Statement
                </label>
                <MultiSelect
                  value={selectedProfitLossStatement}
                  onChange={(e) => setSelectedProfitLossStatement(e.value)}
                  options={adminOption}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Options"
                  className="w-full text-xs"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-3 lg:mr-4">
                <label className="flex font-medium text-xs lg:text-lg w-full lg:w-7/12 items-center mb-1 lg:mb-0">
                  Print Balance Sheet Statement
                </label>
                <MultiSelect
                  value={selectedBalanceSheet}
                  onChange={(e) => setSelectedBalanceSheet(e.value)}
                  options={adminOption}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Options"
                  className="w-full text-xs"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-3 lg:mr-4">
                <label className="flex font-medium text-xs lg:text-lg w-full lg:w-7/12 items-center mb-1 lg:mb-0">
                  Print Trial Balance
                </label>
                <MultiSelect
                  value={selectedTrialBalance}
                  onChange={(e) => setSelectedTrialBalance(e.value)}
                  options={adminOption}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Options"
                  className="w-full text-xs"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-3 lg:mr-4">
                <label className="flex font-medium text-xs lg:text-lg w-full lg:w-7/12 items-center mb-1 lg:mb-0">
                  Print Ledger Report
                </label>
                <MultiSelect
                  value={selectedLedgerReport}
                  onChange={(e) => setSelectedLedgerReport(e.value)}
                  options={adminOption}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Options"
                  className="w-full text-xs"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-3 lg:mr-4">
                <label className="flex font-medium text-xs lg:text-lg w-full lg:w-7/12 items-center mb-1 lg:mb-0">
                  Print Cash Flow Statement
                </label>
                <MultiSelect
                  value={selectedCashFlowStatement}
                  onChange={(e) => setSelectedCashFlowStatement(e.value)}
                  options={adminOption}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Options"
                  className="w-full text-xs"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "JournalVoucher",
      icon: "pi-ticket",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Journal Voucher</h3>
          <p className="text-gray-600">
            This is the content for the Journal Voucher tab.
          </p>
        </div>
      ),
    },
    {
      label: "Customer",
      icon: "pi-users",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Customer</h3>
          <p className="text-gray-600">
            This is the content for the Customer tab.
          </p>
        </div>
      ),
    },
    {
      label: "Supplier",
      icon: "pi-users",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Supplier</h3>
          <p className="text-gray-600">
            This is the content for the Supplier tab.
          </p>
        </div>
      ),
    },
    {
      label: "Sales",
      icon: "pi-users",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Sales</h3>
          <p className="text-gray-600">
            This is the content for the Sales tab.
          </p>
        </div>
      ),
    },
    {
      label: "Purchase",
      icon: "pi-shopping-cart",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Purchase</h3>
          <p className="text-gray-600">
            This is the content for the Purchase tab.
          </p>
        </div>
      ),
    },
    {
      label: "Stock",
      icon: "pi-server",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Stock</h3>
          <p className="text-gray-600">
            This is the content for the Stock tab.
          </p>
        </div>
      ),
    },
    {
      label: "Manufacture",
      icon: "pi-box",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Manufacture</h3>
          <p className="text-gray-600">
            This is the content for the Manufacture tab.
          </p>
        </div>
      ),
    },
    {
      label: "AssetManager",
      icon: "pi-book",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Asset Manager</h3>
          <p className="text-gray-600">
            This is the content for the Asset Manager tab.
          </p>
        </div>
      ),
    },
    {
      label: "HRM",
      icon: "pi-users",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">HRM</h3>
          <p className="text-gray-600">This is the content for the HRM tab.</p>
        </div>
      ),
    },
    {
      label: "Tools",
      icon: "pi-wrench",
      value: (
        <div className="p-4 h-[60vh]">
          <h3 className="text-lg font-bold mb-2">Tools</h3>
          <p className="text-gray-600">
            This is the content for the Tools tab.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen text-gray-600">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold w-full mb-1 md:mb-0">Maintain User</h1>
        <div className="flex md:mr-5">
          <Checkbox checked disabled />
          <label htmlFor="ingredient1" className="ml-2">
            Active
          </label>
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded mb-2 border-l-2">
        <div className="flex flex-col md:flex-row mb-3 md:mb-4">
          <label className="flex text-xs md:text-lg md:font-medium w-1/5 items-center mb-1 md:mb-0">User ID</label>
          <input
            type="text"
            value="admin"
            className="w-full border p-2 rounded"
            disabled
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <label className="flex text-xs md:text-lg md:font-medium w-1/5 items-center">
            Password
          </label>
          <input type="password" className="w-full border p-2 rounded" />
        </div>
      </div>
      <div className="bg-white p-4 shadow rounded mb-3">
        <div className="flex flex-col lg:flex-row lg:mb-4 ">
          <div className="flex flex-col lg:flex-row w-full mb-3 lg:mb-0">
            <label className="flex w-2/6 text-xs lg:text-lg lg:font-medium items-center">
              Full Name
            </label>
            <input
              type="text"
              value="admin"
              className="w-full border p-2 rounded mr-4"
            />
          </div>
          <div className="flex flex-col lg:flex-row w-full mb-3 lg:mb-0">
            <label className="flex w-2/6 text-xs lg:text-lg lg:font-medium items-center">
              No Telephone
            </label>
            <input
              type="text"
              value="084352533423"
              className="w-full border p-2 rounded mr-4"
            />
          </div>
          <div className="flex flex-col lg:flex-row w-full mb-3 lg:mb-0">
            <label className="flex w-2/6 text-xs lg:text-lg lg:font-medium items-center">
              Email Address
            </label>
            <input
              type="text"
              value="fHw0A@example.com"
              className="w-full border p-2 rounded mr-4"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mb-2">
          <div className="flex flex-col lg:flex-row w-full mb-3 lg:mb-0">
            <label className="flex w-2/6 lg:text-lg text-xs lg:font-medium items-center ">
              Security Role
            </label>
            <select className="w-full rounded mr-4 h-10">
              <option>System Administrator</option>
            </select>
          </div>
          <div className="flex flex-col lg:flex-row w-full mb-3 lg:mb-0">
            <label className="flex w-2/6 lg:text-lg text-xs lg:font-medium items-center">
              Language
            </label>
            <select className="w-full rounded mr-4 h-10">
              <option>Bahasa Indonesia</option>
            </select>
          </div>
          <div className="flex w-full items-center mb-3 lg:mb-0">
            <label className="flex w-full lg:text-lg text-xs lg:font-medium items-start lg:items-center">
              User Active in Asset Management
            </label>
            <Checkbox checked disabled className="w-auto mr-4" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card">
        <TabView scrollable>
          {menuOptions.map((tab) => (
            <TabPanel
              key={tab.label}
              header={tab.label}
              leftIcon={`pi ${tab.icon} mr-2`}
            >
              {tab.value}
            </TabPanel>
          ))}
        </TabView>
      </div>
    </div>
  );
};
