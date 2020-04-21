import React from 'react';

const Logo = ({ isEpisode }) => {
  let className = 'logo';

  if (isEpisode) className += ' logo--episode';

  return (
    <div className={className}>
      <svg width="693.615" height="419.375">
        <path
          fill="#FFE81F"
          d="M148.718 221.207l8.67 25.461c4.691 13.768 8.879 24.779 9.425 24.779a.037.037 0 00.024-.01c.6-.53 17.57-49.811 17.57-49.811h32.89l-39.68 115.619h-22.86s-24.4-70.471-24.3-70.739l-25.47 69.851h-22.63l-39.18-115.15 32.73.021s17.929 50.821 18.168 50.821l.002-.002 17.89-50.841h36.751M32.003 213.2l3.601 10.584 39.18 115.149 1.845 5.424h33.957l1.918-5.26 17.685-48.5c1.524 4.434 3.171 9.213 4.818 13.988a34594.063 34594.063 0 0012.191 35.277l1.864 5.383h34.268l1.854-5.403 39.68-115.618 3.637-10.598H178.701l-1.858 5.396a6877.534 6877.534 0 01-10.296 29.676 722.652 722.652 0 01-1.587-4.611l-8.669-25.46-1.846-5.421h-48.143l-1.881 5.345-10.453 29.706a12756.22 12756.22 0 01-10.516-29.691l-1.882-5.334-5.657-.004-32.73-.021-11.18-.007zM655.258 220.758l-.075 30.305s-32.643-.109-49.239-.109c-5.521 0-9.266.013-9.444.045-2.86.521-4.681 6.602-3.87 9.271.399 1.35 3.391 5.76 6.63 9.81 3.229 4.051 8.54 10.681 11.78 14.729 8.319 10.381 9.46 12.43 10.229 18.391 1.25 9.681-3.329 20.16-11.829 27.07-8.518 6.93-8.145 6.979-71.383 6.979h-2.777c-38.46-.01-58.8-.329-61.761-.989-5.26-1.19-13.64-8.03-35.79-29.28-7.967-7.636-15.309-14.322-15.686-14.324-.01 0-.015.006-.015.016l-.261 44.579-35.899-.159-.221-114.98h80.061c24.13.871 40.46 24.91 37.21 40.24-.74 3.479-2.62 8.521-4.181 11.2-3.21 5.5-11.38 12.56-18.011 15.591-2.449 1.108-4.449 2.398-4.449 2.858 0 1.71 8.061 9.649 11.08 10.91 2.579 1.079 10.09 1.319 43.21 1.319l10.608.002c33.293 0 31.618-.24 34.19-5.741 1.801-3.83.431-6.12-12.239-20.39-16.051-15.971-14.37-23.621-14.48-29.271-.229-6.77 5.102-28.069 32.812-28.069l73.8-.003m-215.07 53.12c15.37 0 18.49-.239 21.761-1.66 11.04-4.8 11.63-18.979 1.04-25.271-2.319-1.381-5.3-1.609-21.96-1.7l-19.279-.101c.159.15-.061 27.57-.061 27.57s4.829 1.162 18.499 1.162m223.089-61.12h-81.821c-16.032 0-25.515 6.328-30.646 11.637-8.347 8.633-10.313 19.504-10.162 24.629.008.427.003.865-.002 1.322-.073 8.329 1.154 17.758 16.659 33.246 3.065 3.452 8.193 9.239 10.131 12.115-4.238.521-14.98.521-26.262.521h-4.792l-5.816-.002c-19.904 0-36.688-.057-40.128-.736-.481-.314-1.156-.854-1.898-1.498 6.877-4.235 13.83-10.799 17.104-16.412 1.987-3.413 4.178-9.243 5.098-13.568 2.04-9.625-1.325-21.236-9.001-31.068-8.956-11.471-21.985-18.334-35.746-18.83l-.145-.006H377.628l.016 8.017.221 114.979.016 7.949 7.949.035 35.899.159 7.988.035.047-7.988.155-26.706a641.46 641.46 0 012.269 2.165c24.227 23.24 32.359 29.679 39.562 31.308 1.979.441 5.253 1.172 63.523 1.188h2.779c31.546 0 47.38 0 56.799-.91 10.789-1.043 14.259-3.49 19.461-7.725l.173-.141c10.685-8.687 16.323-21.83 14.715-34.3-1.048-8.11-3.194-11.479-11.922-22.368l-2.594-3.24c-3.04-3.799-6.713-8.387-9.175-11.475-1.986-2.484-3.546-4.689-4.487-6.133 1.236-.003 2.841-.005 4.918-.005 16.395 0 48.887.108 49.213.11l8.008.026.02-8.008.075-30.306.021-8.016zm-233.538 52.828c.013-2.021.025-4.287.038-6.557.01-2 .019-4.004.022-5.84l11.187.058c6.429.035 16.103.088 17.989.623 2.407 1.461 3.75 3.72 3.604 6.06-.08 1.264-.682 3.588-3.821 4.951-1.75.76-4.54.997-18.57.997-4.45 0-7.883-.129-10.449-.292zM312.908 220.287l40.29 115.92-32.83.15-5.45-17.41-58.7-.471-5.18 17.431-32.5-.341 39.78-115.229 54.59-.05m-26.401 16.996c-.083.333-5.144 14.219-10.222 28.104-5.12 14-10.257 28-10.328 28.109v0c.136-.04 18.316-.08 29.968-.08 5.453 0 9.475.009 9.55.029l.001.005v-.003l-.001-.002c-.204-.529-18.909-55.486-18.968-56.162l.001-.006-.001.006m32.088-25.001l-5.693.005-54.59.051-5.696.005-1.859 5.386-39.78 115.229-3.623 10.494 11.102.115 32.5.341 6.033.063 1.719-5.782 3.466-11.662 46.854.375 3.708 11.848 1.765 5.638 5.907-.026 32.829-.15 11.195-.052-3.676-10.574-40.29-115.92-1.871-5.384zm-41.123 73.142c1.515-4.129 3.556-9.71 6.327-17.289l2.393-6.545 2.169 6.398c.646 1.906 3.485 10.27 5.92 17.428-7.24 0-12.69.001-16.809.008zM326.488 81.928v28.6h-57.28v87.47h-34.15v-87.54l-66.86.19c-8.06 0-9.14 6.42-9.14 8.88 0 3.02 1.97 6.04 12.79 19.74 7.02 8.9 13.47 17.78 14.32 19.72 4.64 10.68-1.36 27.32-12.29 34.08-7.79 4.813-6.459 4.931-64.308 4.931H37.908v-32.13h97.9l2.89-2.01c1.95-1.36 3.08-3.23 3.51-5.79.6-3.68.29-4.16-11.8-17.78-14.29-16.1-15.8-19.04-15.06-29.32.84-11.73 11.3-28.77 29.58-28.77l181.56-.271m8-8.012l-8.013.012-181.56.27c-10.458 0-20.171 4.518-27.342 12.722-5.814 6.652-9.63 15.429-10.206 23.477-.973 13.511 2.137 18.393 17.056 35.202 4.33 4.877 8.447 9.516 9.821 11.486a1.35 1.35 0 01-.054.159c-.015.012-.038.03-.07.052l-.822.572H29.908v48.13h79.662c28.522 0 42.6-.027 50.894-.635 9.49-.695 12.518-2.323 17.054-5.14l.566-.351c14.262-8.821 21.612-29.827 15.422-44.074-1.91-4.358-14.003-19.746-15.376-21.486-3.796-4.807-10.062-12.74-11.054-15.036.024-.193.071-.393.121-.532.165-.042.481-.098 1.001-.098l58.86-.167v87.517h50.15v-87.47h57.28v-44.61zM419.548 82.857l40.18 116.22-32.77-.18-5.32-17.41-58.439-.26-5.221 16.77h-33.369l39.739-115.14h55.2m-46.811 73.621l39.801-.05.001.001c.136 0-19.342-57.201-19.472-57.241-.142-.005-20.779 57.29-20.33 57.29m52.51-81.621h-66.6l-1.86 5.39-39.74 115.141-3.662 10.61h50.484l1.75-5.623 3.461-11.121 46.632.207 3.599 11.774 1.721 5.629 5.887.033 32.77.18 11.297.062-3.691-10.676-40.18-116.22-1.868-5.386zm-41.396 73.607a4094.323 4094.323 0 019.014-25.312 9632.564 9632.564 0 018.588 25.29l-17.602.022zM532.396 82.857c25.921 0 43.91.37 47.37.97 8 1.39 15.23 5.66 20.65 12.22 5.67 6.86 6.97 10.14 7.71 19.54 1.061 13.27-5.25 24.72-17.7 32.15-3.63 2.17-7.359 4.28-8.29 4.7-1.43.65-1.239 1.27 1.32 4.27 1.649 1.93 4.51 4.68 6.35 6.11l3.36 2.61 62.08.89.609 31.68h-38.061c-29.439 0-38.86-.27-41.62-1.2-4.13-1.4-14.069-9.82-34.271-29.04l-14.42-13.72.152 43.96h-37.043V82.857h41.804m-5.458 51.77h19.671c19.141 0 19.739-.06 22.47-2.11 4.881-3.66 6.609-7.43 6.091-13.22-.53-5.97-2.83-9.08-8.601-11.58-3.25-1.42-6.381-1.65-21.721-1.65h-17.91v28.56m5.458-59.77h-49.8v131.14h53.071l-.028-8.028-.088-25.216.84.799c24.986 23.773 32.356 29.173 37.218 30.821 3.733 1.259 9.982 1.624 44.188 1.624h46.215l-.156-8.154-.609-31.68-.148-7.734-7.734-.111-59.402-.851-1.245-.967a26.877 26.877 0 01-1.389-1.179l1.207-.717c15.003-8.953 22.866-23.407 21.569-39.653-.863-10.959-2.82-15.896-9.52-24-6.584-7.969-15.621-13.298-25.447-15.005-5.46-.947-32.881-1.089-48.742-1.089zm2.542 39.21h9.91c14.027 0 16.806.233 18.518.981 3.25 1.408 3.58 2.091 3.835 4.957.256 2.848-.097 3.994-2.922 6.112l-.223.166c-1.865.345-8.786.345-17.447.345h-11.67l-.001-12.561z"
        />
      </svg>
    </div>
  );
};

export default Logo;
