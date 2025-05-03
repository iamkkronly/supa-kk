import { supabase } from './supabase.js';

const authSection = document.getElementById('auth-section');
const notesSection = document.getElementById('notes-section');
const noteBox = document.getElementById('note');
const savedNote = document.getElementById('saved-note');

window.signUp = async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { error } = await supabase.auth.signUp({ email, password });
  alert(error ? error.message : 'Signup successful, check your email!');
};

window.login = async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return alert(error.message);
  showNotes();
};

window.logout = async () => {
  await supabase.auth.signOut();
  authSection.classList.remove('hidden');
  notesSection.classList.add('hidden');
};

async function showNotes() {
  authSection.classList.add('hidden');
  notesSection.classList.remove('hidden');
  const { data: { user } } = await supabase.auth.getUser();
  const { data } = await supabase.from('notes').select('content').eq('user_id', user.id).single();
  if (data) noteBox.value = data.content;
}

window.saveNote = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  const { error } = await supabase
    .from('notes')
    .upsert([{ user_id: user.id, content: noteBox.value }], { onConflict: ['user_id'] });
  savedNote.innerText = error ? 'Error saving!' : 'Note saved!';
};

supabase.auth.getSession().then(({ data: { session } }) => {
  if (session) showNotes();
});
