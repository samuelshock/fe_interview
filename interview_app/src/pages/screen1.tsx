import {
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import { UseSearchStore } from "../store/MainStore"
import { useEffect } from "react"
import { useDebounce } from "../hooks/useDebounce"

export const Screen1 = () => {
  const tasks = UseSearchStore((state) => state.tasks)
  const fetchTasks = UseSearchStore((state) => state.fetchTasks)
  const searchTerm = UseSearchStore((state) => state.searchTerm)
  const setSearchTerm = UseSearchStore((state) => state.setSearchTerm)

  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  console.log(tasks)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Implement search logic here
      console.log("Search term:", searchTerm)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  useEffect(() => {
    // Fetch data here based on debouncedSearchTerm
    console.log("Searching with term:", debouncedSearchTerm)
  }, [debouncedSearchTerm])

  const filteredData = tasks.filter(
    (item) =>
      item.id.toString().includes(debouncedSearchTerm) ||
      item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      item.notes.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  )

  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        fullWidth
        margin="normal"
      />
      <Typography variant="h5">Screen 1</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
