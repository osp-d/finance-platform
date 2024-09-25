import { useMemo } from "react";
import { SingleValue } from "react-select";
import CreateableSelect from "react-select/creatable";

type Props = {
  onChange: (v?: string) => void;
  onCreate?: (v: string) => void;
  options?: { label: string; value: string }[];
  value?: string | null | undefined;
  disabled?: boolean;
  placeholder?: string;
};

export function Select({
  value,
  onChange,
  onCreate,
  options = [],
  disabled,
  placeholder,
}: Props) {
  const onSelect = (option: SingleValue<{ label: string; value: string }>) => {
    onChange(option?.value);
  };

  const formattedValue = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  return (
    <CreateableSelect
      placeholder={placeholder}
      className="h-10 text-sm"
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "e2e8f0",
          ":hover": {
            borderColor: "e2e8f0",
          },
        }),
      }}
      value={formattedValue}
      onChange={onSelect}
      onCreateOption={onCreate}
      options={options}
      isDisabled={disabled}
    />
  );
}
