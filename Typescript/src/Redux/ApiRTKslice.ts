import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiRTKSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65e6eac053d564627a8d578b.mockapi.io/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    dataOfApi: builder.query<UserData[], string>({
      query: () => "todo",
      providesTags: ["Posts"],
    }),
    deleteData: builder.mutation<void, string>({
      query: (id) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    addData: builder.mutation<UserData, Partial<UserData>>({
      query: (newData) => {
        console.log("🚀 ~ newData:", newData);
        return {
          url: `todo`,
          method: "POST",
          body: newData,
          headers: { "Content-type": "application/json" }
        };
      },
      invalidatesTags: ["Posts"],
    }),
    updateData: builder.mutation<void, UserData>({
      query: (newData) => ({
        url: `todo/${newData.id}`,
        method: "PUT",
        body: newData,
        headers: { "Content-type": "application/json" },
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

// Destructure and export the generated hooks with correct types
export const {
  useDataOfApiQuery,
  useDeleteDataMutation,
  useAddDataMutation,
  useUpdateDataMutation,
} = ApiRTKSlice;
