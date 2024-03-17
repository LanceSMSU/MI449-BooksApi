import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"

const supabaseUrl = 'https://nnpcyzeigjxgcifkctlj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ucGN5emVpZ2p4Z2NpZmtjdGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MDQ0NzUsImV4cCI6MjAyNjI4MDQ3NX0.GkI50APl0MiecQDBkIP2LlnfXmugOTWxg3IWTWWh2Mo'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
  
    for (let book of books) {
       let bookList = document.getElementById('books');
       bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
     }
}

getBooks();
