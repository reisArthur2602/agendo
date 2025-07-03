import { AvailabilitiesForm } from "./form";
import { getAvailabilities } from "../../server/get-availabilities";

export const AvailabilitiesList = async () => {
  const availabilities = await getAvailabilities();

  return (
    <>
      <AvailabilitiesForm availabilities={availabilities} />
    </>
  );
};
