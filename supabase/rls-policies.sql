-- RLS policies for the current Cube Game client-side Supabase setup.
--
-- These policies restore the existing browser-based reads and writes used by
-- src/stores/users.js and src/pages/PersonalityReview.vue.
--
-- Warning: the users table stores passwords in plaintext and this policy makes
-- that table publicly readable, so it is only suitable as a temporary
-- compatibility fix.

alter table public.users enable row level security;
alter table public.answers enable row level security;

drop policy if exists "Public read users" on public.users;
drop policy if exists "Public insert users" on public.users;
drop policy if exists "Public update users" on public.users;
drop policy if exists "Public read answers" on public.answers;
drop policy if exists "Public insert answers" on public.answers;
drop policy if exists "Public update answers" on public.answers;

create policy "Public read users"
on public.users
for select
using (true);

create policy "Public insert users"
on public.users
for insert
with check (true);

create policy "Public update users"
on public.users
for update
using (true)
with check (true);

create policy "Public read answers"
on public.answers
for select
using (true);

create policy "Public insert answers"
on public.answers
for insert
with check (true);

create policy "Public update answers"
on public.answers
for update
using (true)
with check (true);