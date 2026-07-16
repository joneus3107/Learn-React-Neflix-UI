import { createTheme } from '@mui/material/styles';

const netflixTheme = createTheme({
  palette: {
    mode: 'dark', // Bắt buộc dùng chế độ tối để ra đúng chất Netflix
    primary: {
      main: '#E50914', // Đỏ đặc trưng của logo Netflix
      light: '#F44336', // Màu đỏ sáng hơn khi hover vào button
      dark: '#B81D24',  // Màu đỏ trầm hơn khi bấm (active)
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF', // Màu trắng cho các nút phụ hoặc viền
      contrastText: '#000000',
    },
    background: {
      default: '#141414', // Màu đen xám đặc trưng của nền ứng dụng Netflix (không phải đen xì #000)
      paper: '#181818',   // Màu của các ô card, modal hoặc phần tử nổi lên trên nền
    },
    text: {
      primary: '#FFFFFF',   // Chữ chính màu trắng tinh
      secondary: '#AAAAAA', // Chữ phụ (mô tả, năm sản xuất...) màu xám nhạt
    },
  },
  typography: {
    fontFamily: '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h6: { fontWeight: 500 },
    button: {
      textTransform: 'none', // Giữ nguyên chữ thường/hoa thay vì tự động viết hoa toàn bộ nút
      fontWeight: 600,
    },
  },
  components: {
    // Tùy biến lại các Component của MUI cho mượt mà và "Netflix" hơn
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px', // Bo góc nhẹ đặc trưng của nút Netflix
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#181818',
          borderRadius: '4px',
          transition: 'transform 0.3s ease-in-out', // Hiệu ứng zoom nhẹ khi hover vào card phim
          '&:hover': {
            transform: 'scale(1.05)',
            cursor: 'pointer',
          },
        },
      },
    },
  },
});

export default netflixTheme;
