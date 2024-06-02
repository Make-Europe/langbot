import React from 'react';

export default function Exams() {
  const b1Exams = [
    { id: 1, name: '' },
    { id: 2, name: 'B1 Exam 2' },
    { id: 3, name: 'B1 Exam 3' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">B1 German Exams</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {b1Exams.map(exam => (
          <div key={exam.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">{exam.name}</p>
            <p className="text-gray-600 mt-2">Exam Details...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
