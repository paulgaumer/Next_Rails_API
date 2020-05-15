import React from 'react';
import { CSVLink, CSVDownload } from 'react-csv';
import { formatDate } from '../../../utils/formatDate';

const CrmSection = ({ crmItems }) => {
  const csvHeader = ['email'];
  const csvContent = crmItems.map((item) => [item.email]);
  const csvData = [csvHeader, ...csvContent];
  console.log(csvData);

  return (
    <div>
      <div>
        <div className="flex items-center">
          <h3 className="pr-4 text-lg font-medium leading-6 text-gray-900">
            Download mailing list
          </h3>
          <CSVLink data={csvData} filename={'podwii-crm-contacts.csv'}>
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="inline-flex items-center px-2.5 py-1.5 border border-indigo-500 text-xs leading-4 font-medium rounded text-indigo-500 hover:text-indigo-600 hover:border-indigo-600 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-indigo-700 transition ease-in-out duration-150"
              >
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span className="ml-1">CSV</span>
              </button>
            </span>
          </CSVLink>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Email
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Added Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {crmItems.map((item) => {
                  return (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap border-b border-gray-200">
                        {item.email}
                      </td>
                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        {formatDate(item.created_at)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmSection;
