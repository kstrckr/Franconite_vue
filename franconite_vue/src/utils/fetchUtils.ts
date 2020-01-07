export async function fetchPosts(): Promise<any> {
  const response = await fetch('https://www.kurtstrecker.com/api/projects')
  
  return await response.json();    
}