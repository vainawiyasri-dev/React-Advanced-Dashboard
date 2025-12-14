import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../features/counterSlice'
import { Box, Button, Typography } from '@mui/material'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Counter Value: {count}</Typography>

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          Increment
        </Button>

        <Button variant="contained" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>

        <Button variant="outlined" onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </Box>
    </Box>
  )
}

export default Counter
