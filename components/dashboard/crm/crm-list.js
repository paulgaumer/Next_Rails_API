import React from 'react';
import { formatDate } from '../../../utils/formatDate';

const CrmSection = ({ crmItems }) => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Manage your mailing list
        </h3>
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
                    Date
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
