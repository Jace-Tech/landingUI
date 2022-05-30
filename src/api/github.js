const BASE_URL = "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"

export const fetchRepositories = async (page = 1, per_page = 30) => {
    try {

        const request = await fetch(`${BASE_URL}&page=${page}&per_page=${per_page}`)
        const reponse = await request.json() 

        return reponse?.items
    } catch (err) {
        return {
            error: err.message
        }
    }
}