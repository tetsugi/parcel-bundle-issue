import { Box } from "@chakra-ui/react";
import { FC, useCallback, lazy, Suspense } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Route, Switch } from "react-router-dom";

const Foo = lazy(() => import("~/src/Foo"));

export const App: FC = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("app", async () => {
    const res = await fetch("https://randomuser.me/api/");
    return await res.json();
  });

  const handleClick = useCallback(async () => {
    await queryClient.invalidateQueries("app");
  }, [queryClient]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box color="blue.300" onClick={handleClick}>
        {isLoading ? "Loading..." : JSON.stringify(data)}
      </Box>
      <Switch>
        {/* Adding React.lazy causes an error? */}
        <Route path="/" component={Foo} />
      </Switch>
    </Suspense>
  );
};
