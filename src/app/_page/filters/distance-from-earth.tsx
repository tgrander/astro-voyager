import { Slider } from "@nextui-org/slider";

export function DistanceFromEarth() {
  return (
    <Slider
      label="Distance from Earth"
      color="primary"
      size="md"
      step={10}
      marks={[
        {
          value: 0,
          label: "< 10 light years",
        },
        {
          value: 33,
          label: "10 - 50 light years",
        },
        {
          value: 66,
          label: "50 - 100 light years",
        },
        {
          value: 100,
          label: "> 100 light years",
        },
      ]}
      defaultValue={0}
      minValue={0}
      maxValue={100}
      showTooltip={true}
      className="max-w-md"
    />
  );
}
