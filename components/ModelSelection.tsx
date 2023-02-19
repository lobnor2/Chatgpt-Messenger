"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => {
  fetch("/api/getEngines").then((res) => res.json());
};

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-002",
  });
  return (
    <div>
      <Select
        className="mt-2"
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        placeholder={model}
        defaultValue={model}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
