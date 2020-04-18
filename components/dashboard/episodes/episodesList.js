import React from 'react';
import Link from 'next/link';

const EpisodesList = ({ episodes }) => {
  return (
    <div className="flex flex-col">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  #
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Title
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Published
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {episodes.map((episode, i) => {
                return (
                  <Link
                    href="/dashboard/episodes/[id]"
                    as={`/dashboard/episodes/${episode.guid}`}
                    key={episode.guid}
                  >
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap border-b border-gray-200 cursor-pointer">
                        {episodes.length - i}
                      </td>
                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 cursor-pointer">
                        {episode.title}
                      </td>
                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 cursor-pointer">
                        Mar 19, 2020
                      </td>
                    </tr>
                  </Link>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EpisodesList;
