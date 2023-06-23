import api from "../api/github";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repository } from "./type";



async function fetchRepo(ctx: QueryFunctionContext) {
    const [_, gitHubUser] = ctx.queryKey
    const { data } = await api.get<Repository[]>(`/users/${gitHubUser}/repos`)
    return data
}

export function useFetchRepository(gitHubUser: string) {
    return useQuery(['repos', gitHubUser], fetchRepo)
}