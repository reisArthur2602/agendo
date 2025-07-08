export const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const generateTimeSlots = ({
  from,
  to,
}: {
  from?: string;
  to?: string;
}) => {
  if (!from || !to) return [];

  const [fromHour, fromMinute] = from.split(":").map(Number);
  const [toHour, toMinute] = to.split(":").map(Number);

  const start = new Date();
  start.setHours(fromHour, fromMinute, 0, 0);

  const end = new Date();
  end.setHours(toHour, toMinute, 0, 0);

  if (end <= start) {
    end.setDate(end.getDate() + 1);
  }

  const slots: string[] = [];

  while (start < end) {
    const hours = start.getHours().toString().padStart(2, "0");
    const minutes = start.getMinutes().toString().padStart(2, "0");
    slots.push(`${hours}:${minutes}`);
    start.setMinutes(start.getMinutes() + 30);
  }

  return slots;
};

export const combineDateAndTime = (date: Date, time: string) => {
  const [hours, minutes] = time.split(":").map(Number);

  const combined = new Date(date);
  combined.setHours(hours);
  combined.setMinutes(minutes);
  combined.setSeconds(0);
  combined.setMilliseconds(0);

  return combined;
};

