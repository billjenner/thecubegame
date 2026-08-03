## Supabase SQL

### Create Cube Project

#### Create Schema

create table if not exists public.users (
id uuid primary key default gen_random_uuid(),
email text unique not null,
password text not null,
fname text not null default '',
lname text not null default '',
created_at timestamptz not null default now()
);

alter table public.users enable row level security;

create policy "allow inserts" on public.users
for insert to public
with check (true);

create policy "allow reads" on public.users
for select to public
using (true);

#### Install the client

npm install @supabase/supabase-js

#### Reference Supabase

In file: src/lib/supabase.js

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
import.meta.env.VITE_SUPABASE_URL,
import.meta.env.VITE_SUPABASE_ANON_KEY
)

#### Environment variables

VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key

Project URL
https://rsmuaiazfzhtyotzfsup.supabase.co
Publish Key
sb_publishable_vyZoe7uBWvmJkG-QF7vhHA_lLnGxZJD
Direct Connection String
postgresql://postgres:[YOUR-PASSWORD]@db.rsmuaiazfzhtyotzfsup.supabase.co:5432/postgres

Iforgot1234!!@@
Iforgot1234!@#$

### Email functionality

https://formsubmit.co/

# The Cube Game (thecubegame)

The Cube Game

In the **Cube Test (Kokology / Cube Personality Test)** interpretation, the **room** generally represents your **view of yourself and your inner world**—your psychological space, personal boundaries, and how you experience your life environment. The exact interpretations are not scientifically validated, but they are commonly used as a reflective exercise for self-exploration.

For the room questions you listed, the interpretations are often:

| Question                                        | Symbolic meaning                                                                                                     |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **How large is the room? (small, large, vast)** | Represents your perceived inner world, sense of possibility, and openness to life                                    |
| **What color is the room?**                     | Reflects your emotional atmosphere, mood, and how you experience yourself                                            |
| **Does it have windows?**                       | Represents openness to the outside world, awareness, curiosity, and willingness to connect                           |
| **Does it have multiple doors?**                | Represents choices, opportunities, relationships, and ability to move between different areas of life                |
| **Is it sealed/enclosed?**                      | May suggest privacy, self-protection, introspection, or feeling restricted                                           |
| **Is it comfortable?**                          | Reflects how comfortable you are with yourself and your current life situation                                       |
| **Is it a safe place you want to be?**          | Represents your sense of security, emotional stability, and whether your inner world feels like a place of belonging |

### More detailed interpretation examples

#### Room size

- **Small room**
  - May indicate a preference for intimacy, simplicity, and a controlled environment.
  - Could suggest someone who values privacy and personal space.
  - In some interpretations, may suggest feeling limited or constrained.

- **Large room**
  - Often associated with confidence, openness, ambition, and a broad perspective.
  - Suggests comfort with possibilities and exploration.

- **Vast room**
  - May represent a highly imaginative inner world, big aspirations, or a desire for freedom.
  - Could also indicate feeling overwhelmed by endless possibilities.

---

#### Room color

Colors are often interpreted emotionally:

- **White**
  - Clarity, simplicity, peace, new beginnings

- **Blue**
  - Calmness, reflection, stability

- **Green**
  - Growth, balance, healing, nature

- **Yellow**
  - Optimism, creativity, energy

- **Red**
  - Passion, intensity, motivation

- **Black/dark colors**
  - Mystery, depth, privacy, seriousness

- **Gray**
  - Neutrality, practicality, emotional restraint

- **Purple**
  - Imagination, spirituality, individuality

---

#### Windows

- **Many windows**
  - Openness, curiosity, desire for connection
  - Awareness of the world around you

- **Few/small windows**
  - Selective openness
  - Preference for privacy or controlled exposure

- **No windows**
  - Strong internal focus
  - Self-contained personality
  - Possible feeling disconnected from outside influences

---

#### Doors

- **Multiple doors**
  - Seeing many paths or possibilities
  - Adaptability
  - Willingness to explore change

- **One door**
  - Focus, consistency, preference for a clear direction

- **No doors**
  - Strong boundaries
  - Feeling stuck or highly protected

---

#### Comfort and safety

A comfortable, safe room is usually interpreted as:

- Feeling at peace with yourself
- Having a secure emotional foundation
- Being comfortable with your identity

An uncomfortable or unsafe room may suggest:

- Stress or uncertainty
- Desire for change
- Feeling exposed or unsettled

---

For your **digital version of the Cube Test**, you could present the reveal as:

> **The Room — Your Inner World**
> The room represents how you perceive yourself and your place in the world. Its size reflects your sense of possibility, its openness reflects how you connect with others, and its atmosphere reflects your emotional relationship with yourself.

This would make the results feel more like a guided personality reflection rather than a rigid "test score."

## Room

| Object | Question / Feature                    | Symbolic Meaning                                     | Interpretation                                                                                                                                                                                         |
| ------ | ------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Room   | Overall room                          | Your inner world and how you perceive yourself       | Represents your psychological space, personal identity, and relationship with your life environment                                                                                                    |
| Room   | Size of the room (small, large, vast) | Sense of possibility and self-perception             | A small room may suggest privacy, simplicity, or a need for control. A large room may suggest openness, confidence, and ambition. A vast room may indicate imagination, freedom, or many possibilities |
| Room   | Color of the room                     | Emotional atmosphere and inner feelings              | Colors may reflect your current emotional state, personality traits, or how you experience yourself                                                                                                    |
| Room   | Windows (number, size, presence)      | Openness to the outside world                        | Many windows may suggest curiosity and connection. Few windows may suggest selectiveness or privacy. No windows may suggest strong internal focus or feeling closed off                                |
| Room   | Multiple doors                        | Choices, opportunities, and life paths               | Multiple doors may indicate adaptability, openness to change, and awareness of possibilities. One door may suggest focus or preference for a clear direction                                           |
| Room   | Sealed or enclosed room               | Personal boundaries and protection                   | A sealed room may represent self-protection, privacy, introspection, or feeling restricted                                                                                                             |
| Room   | Comfort level                         | Relationship with yourself and current circumstances | A comfortable room may suggest self-acceptance, emotional stability, and satisfaction. Discomfort may suggest stress, uncertainty, or desire for change                                                |
| Room   | Safe place you want to be             | Sense of security and belonging                      | Feeling safe suggests a stable inner foundation and comfort with yourself. Feeling unsafe may suggest concerns, vulnerability, or a need for change                                                    |

## Cube

| Object | Question / Feature                                 | Symbolic Meaning                                             | Interpretation                                                                                                                                                                                  |
| ------ | -------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cube   | Overall cube                                       | Your sense of self and identity                              | The cube represents how you perceive yourself — your confidence, self-image, presence, and how you believe others see you                                                                       |
| Cube   | Location in the room                               | Your relationship with your surroundings and life situation  | A cube placed prominently may suggest confidence and a strong sense of presence. A cube placed away or hidden may suggest privacy, modesty, or feeling separate from your environment           |
| Cube   | Distance from you                                  | Emotional connection with yourself                           | A cube close to you may indicate comfort with your identity and self-awareness. A distant cube may suggest self-exploration, emotional distance, or a more observational view of yourself       |
| Cube   | On the ground or floating                          | Grounding, stability, and connection to reality              | A cube on the ground may suggest practicality, stability, and being grounded. A floating cube may suggest imagination, idealism, creativity, or living more in thoughts and possibilities       |
| Cube   | Facing a corner, side, or angle                    | How you present yourself and view yourself                   | Looking at a corner may suggest seeing multiple aspects of yourself. Looking at a flat side may suggest a more direct, straightforward self-image                                               |
| Cube   | Seeing the top or bottom                           | Perspective and self-awareness                               | Seeing the top may suggest a broader perspective, awareness, or looking beyond the obvious. Seeing the bottom may suggest introspection, hidden aspects, or examining foundations               |
| Cube   | Size compared to the room                          | Self-confidence and perceived importance                     | A large cube may suggest confidence, strong identity, or a desire to make an impact. A small cube may suggest humility, privacy, or feeling less prominent                                      |
| Cube   | Color of the cube                                  | Personality expression and emotional identity                | The chosen color may reflect traits, emotions, or qualities associated with your self-image                                                                                                     |
| Cube   | Transparent or opaque                              | Openness and emotional visibility                            | A transparent cube may suggest openness, honesty, and allowing others to see your thoughts and feelings. An opaque cube may suggest privacy, boundaries, or keeping parts of yourself protected |
| Cube   | Texture/material                                   | How you experience your personality and emotional resilience | Smooth surfaces may suggest adaptability and ease. Rough surfaces may suggest complexity, toughness, individuality, or life experiences that shaped you                                         |
| Cube   | Condition of cube (new, damaged, perfect, unusual) | Self-perception and personal history                         | A perfect cube may suggest confidence and balance. A damaged or unusual cube may reflect perceived imperfections, uniqueness, or personal challenges                                            |

## Ladder

| Object | Question / Feature                           | Symbolic Meaning                                                   | Interpretation                                                                                                                                                                                      |
| ------ | -------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ladder | Overall ladder                               | Your goals, ambitions, and personal growth                         | The ladder represents your aspirations, progress, and the effort required to reach higher levels in life                                                                                            |
| Ladder | Location in the room                         | Where your goals fit within your life                              | A ladder close to the cube may suggest that your goals are closely connected to your identity. A ladder farther away may suggest goals that feel distant or separate from who you are today         |
| Ladder | Relationship to the room                     | Your connection between current circumstances and future ambitions | A ladder integrated into the room may suggest that growth feels natural and achievable. A ladder outside or disconnected may suggest goals beyond your current situation                            |
| Ladder | Relationship to the cube                     | Relationship between identity and ambition                         | A ladder near or touching the cube may suggest that your goals are connected to your sense of self. A ladder far from the cube may suggest aspirations that are separate from your current identity |
| Ladder | Leaning against something or standing freely | Support systems and independence                                   | A ladder leaning against something may suggest relying on support, relationships, or external resources. A free-standing ladder may suggest independence and self-reliance                          |
| Ladder | Height of the ladder                         | Size of ambitions and level of challenge                           | A tall ladder may indicate ambitious goals and desire for significant achievement. A short ladder may suggest realistic, immediate goals or satisfaction with current progress                      |
| Ladder | Ability to climb easily                      | Confidence in pursuing goals                                       | An easy-to-climb ladder may suggest confidence, preparedness, and belief that goals are attainable. A difficult ladder may suggest challenges, uncertainty, or perceived obstacles                  |
| Ladder | Material of the ladder                       | Approach to achievement and personal growth                        | A strong material (metal, hardwood) may suggest durability and reliability. A fragile material may suggest caution, creativity, or uncertainty about the path ahead                                 |
| Ladder | Condition of the ladder                      | Perception of available opportunities                              | A new, sturdy ladder may suggest optimism and readiness. An old or damaged ladder may suggest obstacles, past experiences, or concerns about progress                                               |
| Ladder | Impression or feeling it gives you           | Emotional relationship with ambition                               | A positive feeling may indicate motivation and excitement toward growth. A negative feeling may suggest pressure, fear of failure, or uncertainty about change                                      |

## Horse

| Object | Question / Feature                   | Symbolic Meaning                                           | Interpretation                                                                                                                                                                                                               |
| ------ | ------------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Horse  | Overall horse                        | Your soulmate, romantic partner, and intimate relationship | The horse represents the qualities you seek in a partner, how you experience romantic connection, and your expectations of love and companionship                                                                            |
| Horse  | Location of the horse in the room    | Place of romance in your life                              | A horse that is prominent in the room may suggest that love and partnership are an important part of your life. A horse placed away may suggest independence, emotional distance, or that romance is not currently central   |
| Horse  | Distance from the cube               | Relationship between your identity and your partner        | A horse close to the cube may suggest that your partner is deeply connected to your sense of self. A distant horse may suggest maintaining independence or separating personal identity from romantic relationships          |
| Horse  | Relationship between cube and horse  | Balance between individuality and partnership              | A harmonious relationship between the cube and horse may suggest a desire for closeness while maintaining individuality. Conflict or separation may suggest tension between personal needs and relationship needs            |
| Horse  | Location relative to the room        | How accessible and integrated love feels                   | A horse comfortably placed within the room may suggest that intimacy fits naturally into your life. A horse outside the room may suggest that love feels separate, distant, or dependent on external circumstances           |
| Horse  | Distance between the horse and cube  | Emotional closeness and intimacy                           | A horse near the cube may represent emotional connection, trust, and desire for closeness. A horse far away may suggest a need for space, independence, or difficulty feeling fully connected                                |
| Horse  | Size of the horse                    | Perceived importance and influence of a partner            | A large horse may suggest that a romantic partner has a powerful influence in your life. A smaller horse may suggest a relationship that feels supportive but less central                                                   |
| Horse  | Color of the horse                   | Qualities desired in a romantic partner                    | The color may represent emotional qualities you associate with love, attraction, comfort, passion, or compatibility                                                                                                          |
| Horse  | Appearance of the horse              | Idealized qualities and expectations of a partner          | A beautiful, healthy horse may suggest attraction, admiration, and positive expectations. A tired, injured, or neglected horse may reflect concerns about vulnerability, trust, or relationship challenges                   |
| Horse  | What the horse is doing              | Relationship energy and emotional expression               | A calm horse may suggest a peaceful relationship. A playful horse may suggest joy and connection. A running horse may suggest passion, excitement, and freedom. A restless horse may suggest uncertainty or unmet needs      |
| Horse  | Is the horse roaming free or tied?   | Freedom and commitment within a relationship               | A free horse may suggest valuing independence and allowing a partner freedom. A tied horse may suggest commitment, security, responsibility, or possible feelings of restriction                                             |
| Horse  | Does the horse have a saddle?        | Readiness for partnership and shared direction             | A saddled horse may suggest willingness to build a life together, accept responsibility, or move forward as a team. An unsaddled horse may suggest valuing spontaneity, independence, and a relationship without constraints |
| Horse  | Can you approach or touch the horse? | Emotional accessibility and intimacy                       | A horse that welcomes closeness may suggest trust and emotional availability. A horse that avoids you may suggest barriers, uncertainty, or difficulty forming deep connections                                              |
| Horse  | The horse's behavior toward you      | Perceived feelings from a partner                          | A loving, calm, or trusting horse may suggest feeling valued and accepted. A fearful or aggressive horse may suggest concerns about trust, conflict, or emotional safety                                                     |
| Horse  | Your feelings toward the horse       | Your emotional needs and expectations in love              | Feelings of affection may suggest openness to intimacy and partnership. Fear or discomfort may suggest past experiences, uncertainty, or concerns about vulnerability                                                        |
| Horse  | How the horse makes you feel         | Emotional impact of a romantic relationship                | Feeling peaceful may suggest seeking stability and comfort. Feeling excited may suggest desire for passion and adventure. Feeling anxious may suggest concerns about closeness or commitment                                 |
| Horse  | Condition of the horse               | Perception of relationship health                          | A strong, healthy horse may suggest confidence in love and partnership. A damaged or struggling horse may suggest concerns about relationship difficulties                                                                   |

## Window

| Object | Question / Feature                                      | Symbolic Meaning                                            | Interpretation                                                                                                                                                                |
| ------ | ------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Window | Overall window                                          | Awareness, perspective, and connection to the outside world | The window represents how you view the world beyond yourself, your curiosity, awareness, and willingness to explore new experiences                                           |
| Window | Presence of a window                                    | Openness and desire for connection                          | A window suggests awareness of possibilities outside your immediate environment. The absence of a window may suggest self-containment, privacy, or focusing inward            |
| Window | Size of the window                                      | Openness to experiences and information                     | A large window may suggest curiosity, openness, and a desire to understand the world. A small window may suggest selective awareness or a preference for limited exposure     |
| Window | Can you see outside?                                    | Perspective and connection to reality                       | Being able to see outside may suggest awareness of opportunities and interest in the world. An obstructed or unclear view may suggest uncertainty or limited perspective      |
| Window | What does the outside look like?                        | Your perception of the world and future possibilities       | A pleasant outside view may suggest optimism and positive expectations. A dark, empty, or unpleasant view may suggest concerns, uncertainty, or caution about what lies ahead |
| Window | Objects visible outside                                 | Interests, goals, and attention toward the external world   | The objects noticed may represent what captures your attention, what you value, or what you consider important beyond yourself                                                |
| Window | Distance of the view                                    | Relationship with future possibilities                      | A close view may suggest focus on immediate experiences. A distant view may suggest long-term thinking, ambition, or looking toward future possibilities                      |
| Window | Is the window open or closed?                           | Willingness to engage with the outside world                | An open window may suggest openness, communication, and receptiveness. A closed window may suggest boundaries, protection, caution, or a need for personal space              |
| Window | Can you go through the window?                          | Willingness to take risks and transition                    | A window that can be entered may suggest seeing opportunities as accessible. A window that is only for viewing may suggest observation without immediate action               |
| Window | Condition of the window (clear, dirty, broken, covered) | Clarity of perception and emotional filters                 | A clear window may suggest understanding and awareness. A dirty or covered window may suggest uncertainty, guardedness, or difficulty seeing possibilities clearly            |
| Window | Number of windows                                       | Breadth of perspective and sources of influence             | Multiple windows may suggest openness to different viewpoints and experiences. A single window may suggest a focused or specific way of seeing the world                      |
| Window | Your feelings looking through the window                | Emotional relationship with the future                      | Feelings of excitement or peace may suggest optimism and curiosity. Feelings of fear or discomfort may suggest uncertainty or hesitation about change                         |

| Object | Question / Feature                                        | Symbolic Meaning                                       | Interpretation                                                                                                                                                                                                                             |
| ------ | --------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Storm  | Overall storm                                             | Challenges, stress, conflict, and emotional turbulence | The storm represents how you perceive difficulties, uncertainty, and overwhelming situations in life                                                                                                                                       |
| Storm  | Location of the storm (outside, inside the room, distant) | Relationship with challenges                           | A storm outside may suggest seeing challenges as external circumstances. A storm inside the room may suggest struggles that feel personal or internal. A distant storm may suggest awareness of problems without feeling directly affected |
| Storm  | Distance from the window                                  | Perceived closeness of challenges                      | A storm close to the window may indicate current concerns or challenges that feel immediate. A distant storm may suggest future concerns or challenges that feel manageable                                                                |
| Storm  | Distance from the cube                                    | Relationship between challenges and identity           | A storm far from the cube may suggest separating difficulties from your sense of self. A storm near the cube may suggest that challenges strongly affect how you see yourself                                                              |
| Storm  | Size of the storm (small, large, all-encompassing)        | Perception of life's challenges                        | A small storm may suggest confidence in handling difficulties. A large storm may suggest significant challenges or strong emotions. An all-encompassing storm may indicate feeling overwhelmed or deeply affected by circumstances         |
| Storm  | Position of the storm (above, around, below, surrounding) | How challenges are experienced                         | A storm above may represent pressure or external forces. A storm surrounding you may suggest feeling immersed in challenges. A storm passing around you may suggest resilience and separation from problems                                |
| Storm  | Intensity of the storm                                    | Emotional response to adversity                        | A mild storm may indicate manageable difficulties. An intense storm may reflect strong emotions, major transitions, or significant life challenges                                                                                         |
| Storm  | Lightning                                                 | Sudden insight, conflict, or powerful moments          | Lightning may represent sudden changes, realizations, breakthroughs, or moments of tension                                                                                                                                                 |
| Storm  | Thunder                                                   | Communication, warnings, or emotional expression       | Thunder may represent powerful thoughts, messages, conflicts, or emotions that demand attention                                                                                                                                            |
| Storm  | Rain                                                      | Release, cleansing, and emotional processing           | Gentle rain may suggest renewal and healing. Heavy rain may suggest emotional release, sadness, or a need to process feelings                                                                                                              |
| Storm  | Wind                                                      | Change, uncertainty, and outside influence             | Strong winds may suggest feeling influenced by circumstances or rapid change. Calm air may suggest stability despite challenges                                                                                                            |
| Storm  | Noise level (quiet or loud)                               | Emotional impact of challenges                         | A quiet storm may suggest internal processing or calm acceptance. A loud storm may indicate stress, conflict, or overwhelming emotions                                                                                                     |
| Storm  | Movement (passing by, staying, approaching)               | Perception of change and recovery                      | A passing storm may suggest confidence that difficulties are temporary. A stationary storm may suggest ongoing challenges. An approaching storm may suggest anticipation or worry about future events                                      |
| Storm  | Duration of the storm                                     | Sense of permanence of difficulties                    | A brief storm may indicate temporary problems. A lasting storm may suggest feeling stuck or dealing with prolonged challenges                                                                                                              |
| Storm  | Your reaction to the storm                                | Coping style and emotional resilience                  | Feeling calm may suggest confidence and acceptance. Fear may suggest vulnerability or uncertainty. Curiosity may suggest adaptability and willingness to face challenges                                                                   |
| Storm  | Do you seek shelter or face the storm?                    | Approach to adversity                                  | Seeking shelter may suggest caution and self-protection. Facing the storm may suggest courage, resilience, and willingness to confront difficulties                                                                                        |

| Object  | Question / Feature                                       | Symbolic Meaning                              | Interpretation                                                                                                                                                                                                          |
| ------- | -------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Flowers | Overall flowers                                          | Friends, friendships, and social connections  | The flowers represent the people you care about, the friendships you cultivate, and how you experience connection with others                                                                                           |
| Flowers | Location of the flowers (inside or outside the room)     | Place of friendships in your life             | Flowers inside the room may suggest that friendships are a personal and meaningful part of your inner world. Flowers outside may suggest friendships connected to your broader community or experiences beyond yourself |
| Flowers | Distance from the cube                                   | Relationship between friendships and identity | Flowers close to the cube may suggest that friendships are closely connected to who you are. Flowers farther away may suggest more independence or separation between your identity and social relationships            |
| Flowers | Distance from the room                                   | Accessibility and connection with others      | Flowers within easy reach may suggest accessible, active friendships. Flowers farther away may suggest distant friendships, independence, or relationships that require effort to maintain                              |
| Flowers | Number of flowers                                        | Size and diversity of your social circle      | Many flowers may suggest a wide network of friendships. A few flowers may suggest valuing a smaller number of deeper relationships                                                                                      |
| Flowers | Type of flowers                                          | Qualities valued in friendships               | The type of flowers may reflect the qualities you appreciate in friends, such as beauty, strength, uniqueness, loyalty, or emotional warmth                                                                             |
| Flowers | Color of the flowers                                     | Emotional tone and qualities of friendships   | Bright colors may suggest joyful, energetic friendships. Soft colors may suggest calm, supportive relationships. Darker colors may suggest depth, mystery, or more serious connections                                  |
| Flowers | Size of the flowers                                      | Importance and influence of friendships       | Large flowers may suggest that friendships play a major role in your life. Small flowers may suggest modest, private, or less central relationships                                                                     |
| Flowers | Arrangement of flowers                                   | Organization and balance of relationships     | A carefully arranged display may suggest intentional relationships and appreciation for harmony. Wild or scattered flowers may suggest spontaneity and diverse social experiences                                       |
| Flowers | Flowers in a vase                                        | Maintained and intentional friendships        | Flowers in a vase may suggest friendships that require attention, care, and nurturing. They may represent relationships you actively choose to preserve                                                                 |
| Flowers | Flowers growing in the ground                            | Natural and lasting friendships               | Flowers rooted in the ground may suggest stable, authentic relationships that grow naturally over time                                                                                                                  |
| Flowers | Flowers planted in a garden                              | Community and belonging                       | A garden may represent a supportive social environment, shared experiences, and a sense of connection with others                                                                                                       |
| Flowers | Hardy or fragile flowers                                 | Perceived strength of friendships             | Hardy flowers may suggest reliable, resilient friendships. Fragile flowers may suggest relationships that require care, sensitivity, and protection                                                                     |
| Flowers | Healthy or damaged flowers                               | Condition of friendships                      | Healthy flowers may suggest satisfying and supportive relationships. Damaged or struggling flowers may suggest concerns, distance, conflict, or friendships needing attention                                           |
| Flowers | Alive or dead flowers                                    | Vitality of relationships                     | Living flowers may suggest active, meaningful friendships. Dead flowers may represent friendships that have ended, changed, faded, or memories of past relationships                                                    |
| Flowers | Need for water or care                                   | Effort required to maintain friendships       | Flowers needing care may suggest awareness that relationships require attention, communication, and investment                                                                                                          |
| Flowers | Your feelings toward the flowers                         | Your emotional relationship with friends      | Positive feelings may suggest appreciation, affection, and connection. Negative feelings may suggest distance, disappointment, or unresolved feelings                                                                   |
| Flowers | How the flowers feel about you                           | Perception of mutual connection               | Flowers thriving near you may suggest a feeling of being valued and welcomed by friends. Flowers appearing neglected may suggest concerns about reciprocity or belonging                                                |
| Flowers | Are you protecting, caring for, or ignoring the flowers? | Role you play in friendships                  | Caring for flowers may suggest being nurturing and invested in relationships. Ignoring them may suggest independence, distance, or limited emotional availability                                                       |

| Object  | Question / Feature                                       | Symbolic Meaning                              | Interpretation                                                                                                                                                                                                          |
| ------- | -------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Flowers | Overall flowers                                          | Friends, friendships, and social connections  | The flowers represent the people you care about, the friendships you cultivate, and how you experience connection with others                                                                                           |
| Flowers | Location of the flowers (inside or outside the room)     | Place of friendships in your life             | Flowers inside the room may suggest that friendships are a personal and meaningful part of your inner world. Flowers outside may suggest friendships connected to your broader community or experiences beyond yourself |
| Flowers | Distance from the cube                                   | Relationship between friendships and identity | Flowers close to the cube may suggest that friendships are closely connected to who you are. Flowers farther away may suggest more independence or separation between your identity and social relationships            |
| Flowers | Distance from the room                                   | Accessibility and connection with others      | Flowers within easy reach may suggest accessible, active friendships. Flowers farther away may suggest distant friendships, independence, or relationships that require effort to maintain                              |
| Flowers | Number of flowers                                        | Size and diversity of your social circle      | Many flowers may suggest a wide network of friendships. A few flowers may suggest valuing a smaller number of deeper relationships                                                                                      |
| Flowers | Type of flowers                                          | Qualities valued in friendships               | The type of flowers may reflect the qualities you appreciate in friends, such as beauty, strength, uniqueness, loyalty, or emotional warmth                                                                             |
| Flowers | Color of the flowers                                     | Emotional tone and qualities of friendships   | Bright colors may suggest joyful, energetic friendships. Soft colors may suggest calm, supportive relationships. Darker colors may suggest depth, mystery, or more serious connections                                  |
| Flowers | Size of the flowers                                      | Importance and influence of friendships       | Large flowers may suggest that friendships play a major role in your life. Small flowers may suggest modest, private, or less central relationships                                                                     |
| Flowers | Arrangement of flowers                                   | Organization and balance of relationships     | A carefully arranged display may suggest intentional relationships and appreciation for harmony. Wild or scattered flowers may suggest spontaneity and diverse social experiences                                       |
| Flowers | Flowers in a vase                                        | Maintained and intentional friendships        | Flowers in a vase may suggest friendships that require attention, care, and nurturing. They may represent relationships you actively choose to preserve                                                                 |
| Flowers | Flowers growing in the ground                            | Natural and lasting friendships               | Flowers rooted in the ground may suggest stable, authentic relationships that grow naturally over time                                                                                                                  |
| Flowers | Flowers planted in a garden                              | Community and belonging                       | A garden may represent a supportive social environment, shared experiences, and a sense of connection with others                                                                                                       |
| Flowers | Hardy or fragile flowers                                 | Perceived strength of friendships             | Hardy flowers may suggest reliable, resilient friendships. Fragile flowers may suggest relationships that require care, sensitivity, and protection                                                                     |
| Flowers | Healthy or damaged flowers                               | Condition of friendships                      | Healthy flowers may suggest satisfying and supportive relationships. Damaged or struggling flowers may suggest concerns, distance, conflict, or friendships needing attention                                           |
| Flowers | Alive or dead flowers                                    | Vitality of relationships                     | Living flowers may suggest active, meaningful friendships. Dead flowers may represent friendships that have ended, changed, faded, or memories of past relationships                                                    |
| Flowers | Need for water or care                                   | Effort required to maintain friendships       | Flowers needing care may suggest awareness that relationships require attention, communication, and investment                                                                                                          |
| Flowers | Your feelings toward the flowers                         | Your emotional relationship with friends      | Positive feelings may suggest appreciation, affection, and connection. Negative feelings may suggest distance, disappointment, or unresolved feelings                                                                   |
| Flowers | How the flowers feel about you                           | Perception of mutual connection               | Flowers thriving near you may suggest a feeling of being valued and welcomed by friends. Flowers appearing neglected may suggest concerns about reciprocity or belonging                                                |
| Flowers | Are you protecting, caring for, or ignoring the flowers? | Role you play in friendships                  | Caring for flowers may suggest being nurturing and invested in relationships. Ignoring them may suggest independence, distance, or limited emotional availability                                                       |

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

References:
https://www.youtube.com/watch?v=5FIPIuw5KXY
https://www.personality-and-aptitude-career-tests.com/cube-personality-test.html
https://www.davidwolfe.com/japanese-cube-test-reveals-personality/

## Questions:

It is a cold reading technique that lets someone in on your personality.

Answer the following questions and imagine what you see. There are no right or wrong answers.

Concentrate on how you feel about what you are describing and not just on how it looks.

Once you have answered all the questions, scroll down to see what it all means.

1. Room
   Imagine a room with nothing in it.
   How big is the room? Is it very large, small, etc? Is there a room or are you imagining vast open space?

2. Cube
   Place in the room a cube.
   How big is the cube? How big is it in relation to the room?
   Where is the cube in the room?
   Is the cube on the ground or floating in the air?
   When you look at the cube are you facing a corner or a side?
   Is the cube transparent or opaque? (Can you see through it or is it solid?)
   What color is the cube? What do you think about that color?

3. Ladder
   Place in the room a ladder.
   Where is the ladder; in relation to the room?; in relation to the cube?
   Is the ladder leaning against anything? Is it leaning on a wall or the cube?
   How tall is the ladder?
   Would you be able to climb it easily?
   What is the ladder made of? How do you feel towards this?

4. Horse
   Now place in the room a horse.
   Where is the horse in the room?
   How far is it from the cube?
   How far is it from the ladder?
   Is it roaming free or tied to anything? Does it have a saddle?
   What color is the horse? How do you feel about this color? How does the horse make you feel?

5. Flowers
   First, are there flowers in the room? (if no, skip the #5)
   How many flower(s) are there?
   Where are the flowers in relation to the cube?
   What color(s) are the flower(s)? How do you feel towards that?

6. Storm
   Add a storm. Describe the storm.
   Is it huge and all encompassing?
   Is it in the room itself or do you perceive it to be outside?
   What is the intensity of the storm? Is it a slight drizzle or a category 5 hurricane?
   How do you feel towards the storm?

## Answers:

Room: The room represents your universe. It is the world you live in and all the things around you. If you imagine it to be very small, you might a small town girl. If it is very large, you might be a city boy (born and raised in South Detroit). Basically, the room is a motif of how big you perceive your life and the world around you to be.

Cube: The cube represents you. How you think about the cube reflects how you think about yourself.

Size: If the cube is very large, you might think very highly of yourself; and if the cube is small, you tend to be meek. The size of the cube in relation to the room also reflects how large you perceive yourself in relation to the world. If you are a large cube in a small roomâ€¦ well, youâ€™re a big fish in a small pond (to use a popular metaphor).

Location: The location of the cube within the room represents where you place yourself in the world. If the cube is in a corner you tend to be a shy person, whereas, if it is in the center, you are the center of your world. If the cube is a great distance from where you are standing, you might not know yourself very well. If the cube is floating in the air you might be a more imaginative person and someone whose cube is on the ground is a more grounded/analytical person. Additionally, if you are facing a side then you are more structured person. If you are facing a corner then you think very abstractly.

Color: If the cube is a transparent (see through) then people can tell what is going on with you (you wear your emotions on your sleeve). If it is a solid color youâ€™re more guarded about your feelings. (see bottom for color details)

Ladder: The ladder is your goal(s) in life and your ability to achieve them. If the ladder is very far away from the cube then your goals do not really define who you are. If your ladder is close or even leaning on the cube then your goals are closely tied to who you are, which could possibly mean that your job/career defines your personality. If your ladder is very high (too high to climb) then it might feel like what you want is unobtainable, but if you can climb easily then you feel as if your expectations can be met. If your ladder is very short then you are easy to please (but you might also not have clearly defined your goals yet). If ladders are dangerous or foreign to you, you might not know what it is you want. What color and how you feel towards it might also suggest areas of interest youâ€™re looking to pursue.

Horse: The horse represents you lover or ideal lover. The distance between the horse and the cube represents the closeness you have with your lover. If the horse is facing the cube it shows you want to be the focus of attention in the relationship. If your horse is closer to your ladder it might suggest you want a lover who supports your goals (you gold digger you). If the horse is tied up, then it shows the need to be controlling in a relationship. If the horse has a saddle then you feel secure with them. If the horse is free and not saddled, it means you view your lover as uncontrollable/unpredictable or someone who is very independent.

Flowers: The flower represents kids. The closer the flower is to the cube, the closer you feel to your children or the thought of having children. If your flower is close to the ladder then a goal in life might be to have children. Different colors also represent a variety in children (you want boys/girls of varying ages). The more flowers the more kids you wish to have.

Storm: The storm represents the obstacles or problems in your life. If the storm is very intense (fucking shit up) then your problems are causing havoc in your life. If they encompass your entire room then it means you might have some ongoing issues which will take a while to resolve. If your storm is light then it means your problems donâ€™t really upset the balance of your world. If it is outside the room it means you see your problems at a distance and they can easily be controlled.

So thatâ€™s it. How well does your cube describe you?

If you have an odd answers that I didn't cover, ask them and I'll try to describe what they mean/make some shit up.

Note: Once youâ€™ve done the cube you can never do it again since you know what the motifs mean. So donâ€™t screw it up by skipping any parts.

Meanings of Colors
Here are some details about color theory and how they can reflect the colors of the cube, ladder, horse, storm, and flowers. However, these are not exact. The way you feel towards the color reflects more about what the motif means, but below is a list of colors and what each means.

Black: Black is the color of authority, elegance, sophistication, and seduction. Black can also imply submission and darkness.

White: White symbolizes innocence and purity, which is why the wedding dress is white. Doctors wear a white coat to imply sterility and cleanliness.

Red: The color of dominance, power, and sexual energy, the color red attracts attention. It is also the color of love.

Blue: One of the most popular colors, blue represents knowledge, authority, and loyalty. Blue causes the body to produce calming chemicals so it is often used in bedrooms. The color blue shows loyalty.

Green: Green represents compassion, prosperity, money, and vitality. It is a relaxing color. Many TV studios have a â€œgreen roomâ€ for people to sit in to relax before they go on the air.

Yellow: Yellow is another attention getter. While it is considered an optimistic color, symbolizing enthusiasm and playfulness, the color yellow is very difficult for the human eye to take in and can be overpowering.

Purple: Purple is the color of royalty. It represents luxury, wealth, and sophistication. It is also feminine and romantic and rarely found in nature.

Brown: Old reliable brown. Brown shows stability. It is the color of earth and a favorite of most men.
