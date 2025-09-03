export default async function Blog({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const filters = await searchParams;
  console.log(filters)
  return (
    <div>
      Blog
    </div>
  );
}
