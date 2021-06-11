interface ProductIcon {
  icon?: string;
}

function ProductIcon({ icon }: ProductIcon) {
  return (
    <div className="inline-flex items-center justify-center rounded-md bg-gray-800 dark:bg-white text-white h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        className="fill-current dark:text-black"
      >
        <path fillRule="evenodd" d={icon}></path>
      </svg>
    </div>
  );
}

export default ProductIcon;
