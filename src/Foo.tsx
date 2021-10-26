import { Box } from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";

const Foo: FC = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("foo", async () => {
    const res = await fetch("https://randomuser.me/api/");
    return await res.json();
  });

  const handleClick = useCallback(async () => {
    await queryClient.invalidateQueries("foo");
  }, [queryClient]);

  return (
    <Box color="red.300" onClick={handleClick}>
      {isLoading ? "Loading..." : JSON.stringify(data)}
    </Box>
  );
};
export default Foo;
