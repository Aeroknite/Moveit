import styles from "./utils/style.module.scss";

export const useHome = () => {
  return (
    <main className={styles.home}>
      <aside className={styles.logo}>
        <svg
          className={styles.frame}
          viewBox="140.366 65.813 312.635 327.222"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m284.39 66.52c15.79-1.6 32.81-.98 46.91 7.12 12.17 6.98 20.46 18.76 27.38 30.63 7.6 13.66 13.65 28.12 19.34 42.66 23.08 60.12 45.61 120.45 68.4 180.68 3.3 8.78 6.8 17.81 6.57 27.36-.01 11.98-5.99 24.32-16.56 30.41-6.83 4.09-14.54 7.13-22.62 7-60.58.98-121.18.65-181.77.35-18.03-.15-36.06-.33-54.09-.72-18.27-.15-35.3-15.14-37.34-33.39-.71-5.5.19-11.06 1.92-16.28 5.53-17.08 11.99-33.84 18.23-50.67 15.06-40.3 29.75-80.74 44.93-121 8.74-22.23 16.24-45.12 28.09-65.96 5.29-9.29 11.62-18.17 19.81-25.14 8.64-7.35 19.56-11.78 30.8-13.05m1.96 11.98c-7.28.66-14.42 3.13-20.29 7.56-10.1 7.63-18.59 17.48-24.18 28.88-8 15.97-14.19 32.76-20.66 49.39-22.04 58.09-43.04 116.57-65.32 174.56-1.93 5.15-2.46 10.69-2.41 16.15.03 3.82.24 7.84 2.25 11.21 4.78 8.62 14.6 13.62 24.29 13.84 17.64.68 35.29.4 52.93.65 58.34.16 116.68-.23 175.02-.19 4.46-.06 9.13.54 13.39-1.13 8.1-3.09 15.88-8.95 18.41-17.6 2.82-8.79-.4-17.92-3.44-26.18-22.73-61.02-46.02-121.82-69.34-182.62-6.56-16.59-12.9-33.46-22.48-48.61-5.27-8.42-11.98-16.34-20.94-20.96-11.42-5.85-24.73-6-37.23-4.95z"
            fill="#c75c2f"
            fillRule="evenodd"
          />
        </svg>

        <svg
          className={styles.drone}
          viewBox="216.48 194.1 157.37 154.57"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.drone_path}
            d="m220.73 194.1c2.31 1.01 4.72 1.89 6.77 3.4 4.12 3.29 6.72 8 10.27 11.82 2.23 2.48 6.09 2.68 9.11 1.82 5.77-4.88 10.08-12.16 17.84-14.2.38.28 1.15.83 1.53 1.1-2.51 6.11-7.6 10.52-12.44 14.77-1.79 1.7-4.23 3.8-3.39 6.58 1.28 4.54 5.33 7.47 8.64 10.54 6.3 5.48 13.02 10.5 20.08 14.97 5.36 3.83 11.86-.44 17.74.78 4.34.24 9.15 3.46 13.17.53 8.01-5.2 15.87-10.71 23.07-17.01 1.91-1.76 3.93-3.55 5.13-5.9.94-2.6.85-5.43 1.12-8.14-6.76-5.14-14.04-10.54-17.19-18.75 4.74 1.59 9.26 3.96 12.89 7.46 3.81 3.26 7.46 7.88 12.96 7.8 5.44 0 8.51-5.23 12.31-8.32 3.08-3.22 7.27-4.85 11.53-5.82-1.64 3.01-3.13 6.19-5.54 8.68-2.78 2.98-6.15 5.32-8.99 8.22-3.31 2.86-1.96 8.44 1.28 10.84 5.76 4.8 12.17 9.3 15.23 16.44-3.79-1.08-7.68-2.28-10.73-4.89-3.85-2.84-6.85-6.86-11.24-8.91-4.6-1.27-8.53 2.34-11.59 5.28-7.14 7.28-14.09 14.93-19.45 23.65-2.84 4.34-.04 9.41-.06 14.09.58 5.68-2.82 11.72.32 17.04 4.61 8.03 10.66 15.14 16.65 22.16 3.01 3.53 7.28 6.99 12.24 6.05 4.53-1.82 7.27-6.2 10.8-9.36 2.89-3.08 6.77-4.88 10.61-6.46-1.41 3.14-2.82 6.35-5.03 9.04-2.89 3.72-6.75 6.54-9.71 10.21-2.32 2.61-2.51 7.06.02 9.6 2.74 2.98 6.13 5.27 8.92 8.21 2.57 2.61 4.36 5.85 6.16 9.02-5.22-1.66-10.45-3.84-14.34-7.82-3.04-2.65-5.78-7.02-10.42-6.24-5.42.12-8.79 4.86-12.29 8.33-3.1 3.51-7.11 6.01-11.34 7.96 1.13-3.65 2.34-7.43 5.02-10.26 2.99-3.7 7.33-6.22 9.77-10.36 1.15-3.53-1.48-6.95-3.62-9.52-5.84-6.24-12.43-11.75-19.28-16.86-2.56-1.73-5.11-3.89-8.25-4.39-5.7.18-11.3 2.54-17.04 1.31-4.04-.41-8.57-2.58-12.28.05-5.5 3.41-10.43 7.65-15.55 11.58-4.12 3.46-8.92 6.73-11.03 11.89-.76 2.24-1.5 5.34.52 7.16 3.41 3.31 7.5 5.9 10.58 9.55 2.07 2.38 3.26 5.34 4.62 8.14-3.92-1.33-7.8-3.05-10.84-5.94-4.38-3.75-8.63-9.08-15.02-8.69-3.97-.35-6.51 3.14-9.14 5.51-3.98 3.72-8.35 8.01-14.14 8.19 2.3-7.16 8.85-11.5 14.04-16.47 2.58-2.17 3.26-6.13 2.06-9.18-2.27-2.82-5.43-4.72-8.04-7.19-3.8-3.31-6.74-7.45-9.27-11.77 2.31.67 4.72 1.1 6.9 2.15 5.49 3.04 9.13 8.39 14.13 12.05 2.72 2.09 6.09-.1 8.42-1.75 7.09-5.63 12.51-13.03 17.63-20.42 1.92-3.04 4.28-6.07 4.76-9.72-.02-3.62-1.08-7.14-1.14-10.75-.26-5.17 1.56-10.1 3.04-14.96-5.74-8.81-12.1-17.23-19.47-24.76-3.12-3.44-7.71-6.87-12.62-5.14-3.8 2.05-6.31 5.75-9.48 8.59-3.11 3.19-7.17 5.14-11.27 6.72 1.69-4.03 3.67-8.06 6.96-11.05 3.95-4.21 9.8-7.95 9.93-14.36.47-4.39-3.32-7.39-5.81-10.46-3.65-3.78-6.08-8.51-7.73-13.46m20.55 23.94c-.4.74-1.19 2.21-1.59 2.95 1.9-.47 3.97-.8 5.32-2.37-.94-.15-2.8-.44-3.73-.58m103.84.87c.26.52.79 1.56 1.05 2.08.65-.06 1.95-.18 2.6-.25.01-.71.04-2.12.05-2.83-1.24.33-2.47.66-3.7 1m-104.42 106.98c.75 0 2.23.01 2.98.02-.01-1.66-.35-3.31-.67-4.92-.97 1.52-1.86 3.13-2.31 4.9m104.36-2.59c.02.6.06 1.8.08 2.39.7-.01 2.11-.05 2.81-.07 0-.58-.02-1.73-.02-2.31-.72 0-2.16-.01-2.87-.01z"
            fill="#c75c2f"
            fillRule="evenodd"
          />
        </svg>
      </aside>
    </main>
  );
};

export default useHome;
