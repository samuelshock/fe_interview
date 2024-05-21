import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@mui/material"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

const drawerWidth = 240
interface DashboardLayoutProps {
  children: ReactNode
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button component={Link} to="/screen1">
              <ListItemText primary="Screen 1" />
            </ListItem>
            <ListItem button component={Link} to="/screen2">
              <ListItemText primary="Screen 2" />
            </ListItem>
            <ListItem button component={Link} to="/screen3">
              <ListItemText primary="Screen 3" />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 1,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
