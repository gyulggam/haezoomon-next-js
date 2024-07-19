import React, { useState, useEffect } from 'react';

interface Resource {
  uid: string;
  name: string;
  capacity: number;
  economicReduction: number;
  reliableReduction: number;
  customers: Array<{ uid: string; name: string; capacity: number }>;
}

const ResourceList = ({ resources, className }: { resources: Resource[]; className: string }) => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  useEffect(() => {
    if (resources?.length > 0) {
      setSelectedResource(resources[0]);
    }
  }, [resources]);

  const handleSelectResource = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUid = event.target.value;
    const resource = resources.find((r) => r.uid === selectedUid) || null;
    setSelectedResource(resource);
    console.log('selectedResource', selectedResource);
  };

  return (
    <div className={`w-full ${className}`}>
      <select
        onChange={handleSelectResource}
        value={selectedResource?.uid || ''}
        className="w-full text-slate-600"
      >
        {resources?.map((resource) => (
          <option
            key={resource.uid}
            value={resource.uid}
          >
            {resource.name} (UID: {resource.uid})
          </option>
        ))}
      </select>
    </div>
  );
};

export default ResourceList;
