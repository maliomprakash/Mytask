import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65f96638df1514524611825a.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getAllpost: builder.query({
      query: () => "crud",
      providesTags:['Posts'],
    }),
    deleteData: builder.mutation({
      query: (id) => {
        return {
          url: `crud/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Posts"],
    }),
    addData: builder.mutation({
      query: (newData) => ({
        url: `crud`,
        method: "POST",
        body: newData,
        headers: { "Content-type": "application/json" }
      }),
      invalidatesTags: ["Posts"],
    }),
    updateData: builder.mutation({
      query: (newData) => ({
        url: `crud/${newData.id}`,
        method: "PUT",
        body: newData,
        headers: { "Content-type": "application/json" },
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetAllpostQuery, useDeleteDataMutation,useAddDataMutation,useUpdateDataMutation} = postApi;
