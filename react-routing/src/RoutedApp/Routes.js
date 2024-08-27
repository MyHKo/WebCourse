export const ROUTES = {
    facts: "/",
    fact: (id = null) => (id ? `/fact/${id}` : "/fact/:factId"),
}
