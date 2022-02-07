import { Box } from '@mui/material';
export default function HeroImage({ image }) {
  const image_base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <Box
      sx={{
        backgroundImage: `url(${image_base_url}${image})`,
        height: { xs: 300, sm: 370, lg: 450, xl: 500 },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)',
        }}
      />
    </Box>
  );
}
