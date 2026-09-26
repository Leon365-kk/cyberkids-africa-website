function Logo({ size = 36 }: { size?: number }) {
  return (
    <img
      src="/logo_cyberkids.png"
      width={size}
      height={size}
      alt="CyberKids Africa logo"
      style={{ borderRadius: 8, objectFit: 'cover' }}
    />
  );
}

export default Logo;
