import React, { useState } from 'react';
import { RiAttachmentFill } from '@remixicon/react'
const WitnessEvidencePage: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: '',
    statement: '',
    evidenceDesc: '',
    evidenceLocation: '',
    evidenceStatus: '',
    attachment: undefined as File | undefined,
  });
  const [tab, setTab] = useState<'reporter' | 'incident' | 'witness'>('witness');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, attachment: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Report submitted!');
  };

  return (
    <div className="min-h-screen bg-pink-20 py-4 px-2 sm:px-4 md:px-6 w-full">
      <div className="w-full mx-auto bg-white rounded-lg shadow flex flex-col sm:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-gray-200 p-4 sm:p-6 bg-blue-50">
          <div className="space-y-2">
            <button
              className={`w-full py-2 px-3 rounded font-medium text-sm sm:text-base ${tab === 'reporter' ? 'bg-blue-100 text-blue-900' : 'bg-gray-300'}`}
              onClick={() => setTab('reporter')}
            >
              Reporter information
            </button>
            <button
              className={`w-full py-2 px-3 rounded font-medium text-sm sm:text-base ${tab === 'incident' ? 'bg-blue-100 text-blue-900' : 'bg-gray-300'}`}
              onClick={() => setTab('incident')}
            >
              Report the incident
            </button>
            <button
              className={`w-full py-2 px-3 rounded font-medium flex items-center gap-1 text-sm sm:text-base ${tab === 'witness' ? 'bg-blue-100 text-blue-900' : 'bg-gray-300'}`}
              onClick={() => setTab('witness')}
            >
            Witnesses and initial evidence (if any)
            </button>
          </div>
        </div>
        {/* Main Form */}
        <div className="flex-1 p-4 sm:p-6">
          {tab === 'witness' ? (
            <form onSubmit={handleSubmit}>
              <h2 className="bg-blue-100 text-center rounded font-semibold text-base sm:text-lg py-2 sm:py-3 mb-4 sm:mb-6">Witnesses and initial evidence (if any)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] md:grid-cols-[180px_1fr] gap-2 sm:gap-3 items-start">
                <label htmlFor="fullName" className="text-sm sm:text-base whitespace-nowrap">Full name:</label>
                <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required className="p-2 sm:p-3 rounded border border-gray-300 w-full" />
                <label htmlFor="address" className="text-sm sm:text-base whitespace-nowrap">Address:</label>
                <input id="address" name="address" value={form.address} onChange={handleChange} required className="p-2 sm:p-3 rounded border border-gray-300 w-full" />
                <label htmlFor="phone" className="text-sm sm:text-base whitespace-nowrap">Phone number:</label>
                <input id="phone" name="phone" value={form.phone} onChange={handleChange} required className="p-2 sm:p-3 rounded border border-gray-300 w-full" />
                <label htmlFor="email" className="text-sm sm:text-base whitespace-nowrap">Email (if available):</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} type="email" className="p-2 sm:p-3 rounded border border-gray-300 w-full" />
                <label htmlFor="statement" className="text-sm sm:text-base whitespace-nowrap">Initial statement:</label>
                <textarea id="statement" name="statement" value={form.statement} onChange={handleChange} rows={2} className="p-2 sm:p-3 rounded border border-gray-300 resize-vertical w-full" />
              </div>
              <div className="flex justify-center">
                <div className="inline-block bg-gray-100 border border-gray-300 rounded px-2 sm:px-4 py-1 sm:py-1 font-medium my-4 sm:my-6 text-sm sm:text-base">
                  Initial evidence information (if any)
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] md:grid-cols-[180px_1fr] gap-2 sm:gap-3 items-start">
                <label htmlFor="evidenceDesc" className="text-sm sm:text-base whitespace-nowrap">Describe the evidence:</label>
                <input id="evidenceDesc" name="evidenceDesc" value={form.evidenceDesc} onChange={handleChange} className="p-2 sm:p-3 rounded border border-gray-300 w-full" />
                <label htmlFor="evidenceLocation" className="text-sm sm:text-base whitespace-nowrap">Location of evidence:</label>
                <input id="evidenceLocation" name="evidenceLocation" value={form.evidenceLocation} onChange={handleChange} className="p-2 sm:p-3 rounded border border-gray-300 w-full" />
                <label htmlFor="evidenceStatus" className="text-sm sm:text-base whitespace-nowrap">Status of evidence:</label>
                <input id="evidenceStatus" name="evidenceStatus" value={form.evidenceStatus} onChange={handleChange} className="p-2 sm:p-3 rounded border border-gray-300 w-full" />
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label htmlFor="attachment" className="text-sm sm:text-base">
                    Attachments (images, videos, etc.):
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="attachment"
                      name="attachment"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                    htmlFor="attachment"
                    className="flex items-center gap-1 px-3 py-2 bg-gray-200 rounded border border-gray-400 cursor-pointer hover:bg-gray-300 font-medium text-sm sm:text-base">
                      <RiAttachmentFill size={20} color="gray" />
                      Attach file
                    </label>
                    {form.attachment && (
                      <span className="truncate max-w-[120px] text-xs sm:text-sm text-gray-700">{form.attachment.name}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right mt-4 sm:mt-6">
                <button type="submit" className="bg-blue-700 text-white rounded px-4 sm:px-6 py-2 sm:py-2 font-semibold text-sm sm:text-base hover:bg-blue-800 transition">Submit report</button>
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WitnessEvidencePage;