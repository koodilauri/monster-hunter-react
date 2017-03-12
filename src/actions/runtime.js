// export const GET_USER = "GET_USER";

export const getRuntimes = () => (
  {
    type: "GET_RUNTIME",
    payload: {
      request: {
        url: "/item",
        method: "get",
        data: {}
      }
    }
  }
);