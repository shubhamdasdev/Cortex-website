import Spline from '@splinetool/react-spline';

export default function SplineBrain() {
  const onSplineLoad = () => {
    // Handle load complete
  };

  return (
    <div
      className="absolute inset-0 w-full h-full z-50 pointer-events-none"
      style={{ minHeight: '100vh' }}
    >
      <Spline 
        scene="https://prod.spline.design/xfq6nw5HNrP2OhN8/scene.splinecode" 
        onLoad={onSplineLoad}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}