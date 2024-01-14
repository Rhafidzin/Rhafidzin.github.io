import TrackSearchResult from "./search/searchResult";

export default function artistList{
    return (
        <section className="antialiased bg-gray-100 text-gray-600 px-2">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="flex flex-col justify-center h-full">
        <div className="p-2">
          <div className="overflow-x-auto ">
            <table className="table-auto w-full">
              <thead className="text-xs text-gray-500 bg-gray-50">
                <tr>
                  <th className="p-2 text-left">TITLE</th>
                  <th className="p-2 text-center">ARTIST</th>
                  <th className="p-2 text-right">DURATION</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                <TrackSearchResult />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </section>
    )
}