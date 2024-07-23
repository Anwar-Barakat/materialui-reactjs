import { Autocomplete, Stack, TextField } from "@mui/material";
import React from "react";

type Skill = {
    id: number;
    label: string;
}

const MuiAutoComplete = () => {
    const [value, setValue] = React.useState<string | null>(null);
    const [inputValue, setInputValue] = React.useState<Skill | null>(null);
    const skills = ['html', 'css'];

    const skillsOptions = skills.map((skill, index) => ({
        id: index + 1,
        label: skill
    }));

    console.log({ inputValue });

    return (
        <Stack spacing={3} width={250}>
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label="Skills" />}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)}
            />
            <Autocomplete
                options={skillsOptions}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="Skills" />}
                value={inputValue}
                onChange={(event: any, newValue: Skill | null) => setInputValue(newValue)}
            />
        </Stack>
    );
}

export default MuiAutoComplete;
