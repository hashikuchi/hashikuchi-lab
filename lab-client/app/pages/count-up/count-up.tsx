import { Box, Text, Button, Group } from "@mantine/core";
import { useCountUp } from "./use-count-up";

export function loader() {
  return null;
}

export default function CountUp() {
  const { count, increment, reset } = useCountUp();
  return (
    <Box>
      <Box mb={32}><Text>Current Count: <span data-testid="current-count">{count}</span></Text></Box>
      <Group>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={reset} variant="outline">Reset</Button>
      </Group>
    </Box>
  )
}