import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { Rating, Stack } from "@mui/material"
import React from "react"

const MuiRating = () => {
  const [value, setValue] = React.useState<number | null>(2)

  const changeHandler = (event: React.SyntheticEvent, newValue: number | null) => {
    setValue(newValue)
  }

  console.log(value);


  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={changeHandler}
        precision={.5} icon={<Favorite fontSize="inherit" color="error" />} emptyIcon={<FavoriteBorder />} />
    </Stack>
  )
}

export default MuiRating
