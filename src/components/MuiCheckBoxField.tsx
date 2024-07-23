import { BookmarkBorder } from "@mui/icons-material"
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material"
import React from "react"

const MuiCheckBoxField = () => {

    const [terms, setTerms] = React.useState<boolean>(false)
    const [skills, setSkills] = React.useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerms(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSkills((prevSkills) => {
            if (prevSkills.includes(value)) {
                return prevSkills.filter(skill => skill !== value);
            } else {
                return [...prevSkills, value];
            }
        });
    };

    console.log({ skills });
    console.log({ terms });

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept the terms and conditions"
                    control={
                        <Checkbox
                            value=""
                            icon={<BookmarkBorder />}
                            checkedIcon={<BookmarkBorder />}
                            checked={terms}
                            onChange={handleChange}
                            color="primary"
                        />
                    }
                />
            </Box>

            <Box>
                <FormControlLabel
                    label="I accept the terms and conditions"
                    control={
                        <Checkbox
                            value=""
                            icon={<BookmarkBorder />}
                            checkedIcon={<BookmarkBorder />}
                            checked={terms}
                            onChange={handleChange}
                            color="secondary"
                        />
                    }
                />
            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="React"
                            value={'React'}
                            checked={skills.includes('React')}
                            onChange={handleSkillChange}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Angular"
                            value={'Angular'}
                            checked={skills.includes('Angular')}
                            onChange={handleSkillChange}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Vue"
                            value={'Vue'}
                            checked={skills.includes('Vue')}
                            onChange={handleSkillChange}
                        />
                    </FormGroup>
                </FormControl>

            </Box>
        </Box>
    )
}

export default MuiCheckBoxField
