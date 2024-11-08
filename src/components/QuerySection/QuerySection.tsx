import React from "react";
import { useQueryData, QueryButton, ResultDisplay } from "../index";

export const QuerySection = () => {
  const chainStatus = useQueryData('status');
  const blockHeight = useQueryData('block');
  const validators = useQueryData('validators');
  const netInfo = useQueryData('net_info');

  return (
    <section className="text-center w-full max-w-4xl">
      <h2 className="text-xl font-bold mb-4">Axios Queries without SDK</h2>
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <QueryButton onClick={chainStatus.fetchData} label="Query Chain Status" />
        <QueryButton onClick={blockHeight.fetchData} label="Query Latest Block" />
        <QueryButton onClick={validators.fetchData} label="Query Validators" />
        <QueryButton onClick={netInfo.fetchData} label="Query Network Info" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <ResultDisplay title="Chain Status" data={chainStatus.data} show={chainStatus.show} />
        <ResultDisplay title="Latest Block" data={blockHeight.data} show={blockHeight.show} />
        <ResultDisplay title="Validators" data={validators.data} show={validators.show} />
        <ResultDisplay title="Network Info" data={netInfo.data} show={netInfo.show} />
      </div>
    </section>
  );
}; 