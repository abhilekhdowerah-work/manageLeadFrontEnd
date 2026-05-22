import { useEffect, useState } from "react";
import {
    Box,
    FormControl,
    MenuItem,
    Select,
    Typography,
    Avatar,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { BUSINESSES } from "../../../../api/business.js";

function DropdownList() {
    const [selected, setSelected] = useState({});
    const [businesses, setBusinesses] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setBusinesses(BUSINESSES);
    }, []);
    useEffect(() => {
        if (businesses) {
            setLoading(false);
            setSelected(businesses.data[0])
        }
    }, [businesses])
    if (loading) {
        return (
            <></>
        )
    } else {
        return (
            <FormControl sx={{m: 1}}>
                <Select
                    value={selected.id}
                    onChange={(e) => {
                        const value = businesses.data.find(
                            (item) => item.id === e.target.value
                        );
                        setSelected(value);
                    }}
                    IconComponent={KeyboardArrowDownRoundedIcon}
                    displayEmpty
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                mt: 1,
                                borderRadius: "14px",
                                boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                                padding: "6px",
                            },
                        },
                    }}
                    sx={{
                        width: 220,
                        height: 52,
                        borderRadius: "14px",
                        background: "#DCE8E7",
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #7FA5A2",
                        },

                        ".MuiSelect-select": {
                            padding: "10px 14px",
                        },
                    }}
                    renderValue={() => (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.2,
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 34,
                                    height: 34,
                                    fontSize: 18,
                                    bgcolor: "#58AFC4",
                                }}
                            >
                                {selected.name[0]}
                            </Avatar>

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "#263238",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {selected.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        color: "#7B8A8B",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    {selected.role}
                                </Typography>
                            </Box>
                        </Box>
                    )}
                >
                    {businesses.data.map((item) => (
                    <MenuItem
                        key={item.id}
                        value={item.id}
                        sx={{
                            borderRadius: "10px",
                            mb: 0.5,
                            padding: "10px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.2,
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 34,
                                    height: 34,
                                    fontSize: 18,
                                    bgcolor: "#58AFC4",
                                }}
                            >
                                {item.name[0]}
                            </Avatar>

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "#263238",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {item.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        color: "#7B8A8B",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    {item.role}
                                </Typography>
                            </Box>
                        </Box>
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        );
    }
}

export default DropdownList;