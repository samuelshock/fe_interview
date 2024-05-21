import create from "zustand"

interface SearchType {
  tasks: Notes[]
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  fetchTasks: (limit: number) => Promise<void>
  searchNotes: (searchTerm: string) => void
}

export const UseSearchStore = create<SearchType>((set, get) => ({
  tasks: [],
  searchTerm: "",
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  fetchTasks: async () => {
    const res = await fetch("http://localhost:3000/data.json")
    const json = await res.json()
    // TODO: change this to call the backend
    set({ tasks: json })
  },
  searchNotes: (searchTerm: string) => {
    const { tasks } = get()
    const newTasks = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.notes.toLowerCase().includes(searchTerm.toLowerCase())
    )

    set({ tasks: newTasks })
  },
}))
