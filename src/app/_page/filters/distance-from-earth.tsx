import { Slider } from "@nextui-org/slider";

export function DistanceFromEarth() {
  return (
    <Slider
      label="Select a value"
      color="foreground"
      size="sm"
      step={10}
      marks={[
        {
          value: 20,
          label: "20%",
        },
        {
          value: 50,
          label: "50%",
        },
        {
          value: 80,
          label: "80%",
        },
      ]}
      defaultValue={20}
      className="max-w-md"
    />
  );
}
