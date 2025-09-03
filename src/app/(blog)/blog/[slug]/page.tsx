export default async function BlogBoard({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>
     {slug}
    </div>
  );
}
