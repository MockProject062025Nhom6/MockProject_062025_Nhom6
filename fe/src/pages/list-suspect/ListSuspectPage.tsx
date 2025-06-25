import React from "react"

interface Suspect {
  number: number
  id: string
  name: string
  timeCatch: string
  status: string
}

export default function ListSuspectPage() {
  const suspects: Suspect[] = [
    {
      number: 1,
      id: "C00001",
      name: "Mr Zelesny Mac",
      timeCatch: "25/2/2025",
      status: "Interviewed",
    },
    {
      number: 2,
      id: "C00002",
      name: "Mr Trum",
      timeCatch: "25/2/2025",
      status: "Not yet catch",
    },
  ]

  const handleBack = () => {}

  const handleInterview = (suspectId: string) => {
    console.log("Interview suspect with ID:", suspectId)
    // navigate(`/interview/${suspectId}`)
  }

  return (
    <div className="w-screen min-h-screen bg-[#fdeeee]">
      <div className="max-w-3xl mx-auto py-4 px-4">
        <div className="flex flex-col gap-6">
          <div className="p-2 flex items-center flex-wrap gap-6">
            <button
              onClick={handleBack}
              className="outline-none text-white px-4 py-1 text-sm flex items-center transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back
            </button>
            <h2 className="flex-1 text-3xl font-semibold text-center text-nowrap">
              List suspect in case
            </h2>
          </div>

          <div className="bg-gray-200 p-4">
            <div className="mb-6">
              <p className="font-bold mb-1">IDCase: C0001</p>
              <p className="font-bold">Name: Murder case of hotel Mariot</p>
            </div>

            {/* Table */}
            <div className="bg-white p-2 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-center">
                    <th className="border border-gray-300 px-2 py-1 text-sm">
                      Number
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-sm">
                      ID
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-sm">
                      Name
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-sm">
                      Time catch
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-sm">
                      Action
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-sm">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {suspects.map((suspect) => (
                    <tr key={suspect.id} className="text-center">
                      <td className="border border-gray-300 px-2 py-1 text-sm">
                        {suspect.number}
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-sm">
                        {suspect.id}
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-sm">
                        {suspect.name}
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-sm">
                        {suspect.timeCatch}
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-sm">
                        <button
                          onClick={() => handleInterview(suspect.id)}
                          className="bg-gray-300 text-white px-2 py-0.5 text-sm hover:bg-gray-400 min-w-[80px]"
                        >
                          Interview
                        </button>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-sm">
                        {suspect.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
