import React from 'react';

const InterviewForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <button className="text-blue-500 hover:underline">Back</button>
          <h2 className="text-xl font-bold">Information to be interview</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-200 p-4 rounded">
            <p className="text-sm"><strong>IDCase:</strong> C0001</p>
            <p className="text-sm"><strong>Name:</strong> Murder case of hotel Mariot</p>
            <p className="text-sm"><strong>Time start:</strong> 13:00 24/5/2025</p>
            <p className="text-sm"><strong>End time:</strong> 14:00 24/5/2025</p>
            <p className="text-sm"><strong>Location:</strong> Room 2 at police headquarters California</p>
            <p className="text-sm"><strong>Interviewer:</strong> Miss Linda</p>
            <p className="text-sm"><strong>ID:</strong> <input className="inline w-1/4 p-1 border rounded" placeholder="CA0001" /></p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Questions:</label>
            <div className="bg-gray-200 p-2 rounded mt-1">
              <div className="flex space-x-2 items-center mb-2">
                <span className="text-sm">Question</span>
                <input className="flex-1 p-1 border rounded" placeholder="Why was you doing" />
              </div>
              <div className="flex space-x-2 items-center">
                <span className="text-sm">Answer</span>
                <textarea className="flex-1 p-1 border rounded" placeholder="I like it" rows={2}></textarea>
              </div>
              <div className="flex justify-end mt-2">
                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Note</button>
                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 ml-2">Add question and answer</button>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Attach audio/video</label>
            <div className="bg-gray-200 p-2 rounded mt-1 flex items-center">
              <input type="file" className="flex-1 p-1 border rounded" />
              <span className="mx-2 text-sm">File 1</span>
              <button className="text-red-500 hover:underline">X</button>
              <button className="text-blue-500 hover:underline ml-2">Upload more</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Level of trust</label>
            <select className="w-full p-1 border rounded mt-1">
              <option>Type here...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button className="w-full py-2 bg-blue-500">Done</button>
        </div>
      </div>
    </div>
  );
};

export default InterviewForm;