<template>
  <q-page padding>
    <div class="text-h4 q-mb-lg text-center">Concept</div>

    <div
      class="row q-col-gutter-md"
      style="background-color: #fdecec; padding-bottom: 16px; padding-right: 16px"
    >
      <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <q-card>
          <q-card-section>
            <img src="/Room.jpg" alt="Cube" style="max-width: 100%; height: auto; display: block" />
          </q-card-section>

          <q-expansion-item
            expand-icon="keyboard_arrow_down"
            expanded-icon="keyboard_arrow_up"
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <template v-slot:header>
              <div class="text-h6 text-weight-bold">Room</div>
            </template>

            <q-card-section>
              <p>
                In the version of The Cube Test that Neal Strauss uses, the room (or, in many other
                versions, the desert) represents your world or your personal universe—the
                environment in which you perceive yourself to exist. It is the backdrop against
                which every other symbol is interpreted.
              </p>
              <p>
                Specifically, the room's characteristics are commonly interpreted as follows: Size
                of the room – How expansive or limited you perceive your life and opportunities to
                be. A large room suggests you see your world as full of possibilities. A small room
                can suggest you perceive your world as more constrained or intimate. Brightness –
                Your outlook on life. Bright, open rooms often symbolize optimism. Dark or dim rooms
                may reflect uncertainty, caution, or feeling limited. Walls, windows, and doors –
                How open or closed you feel your world is. Many windows or open doors can symbolize
                openness to new experiences. Solid walls with few openings may symbolize privacy,
                security, or feeling boxed in. Condition of the room – How you currently experience
                your life. Clean and orderly may represent feeling in control. Cluttered or damaged
                may reflect feeling overwhelmed or that life is chaotic. The room itself is not
                usually the primary focus of the test. It serves as the context for the other
                objects: Cube = You / your self-image. Ladder = Your goals or ambitions. Horse =
                Your ideal partner or significant relationship. Flowers = Friends and family. Storm
                = Problems, stress, or challenges.
              </p>
            </q-card-section>
          </q-expansion-item>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <q-card>
          <q-card-section>
            <img src="/Cube.jpg" alt="Cube" style="max-width: 100%; height: auto; display: block" />
          </q-card-section>

          <q-expansion-item
            expand-icon="keyboard_arrow_down"
            expanded-icon="keyboard_arrow_up"
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <template v-slot:header>
              <div class="text-h6 text-weight-bold">Cube</div>
            </template>

            <q-card-section>
              If the cube you've envisioned is large, you're likely a very confident person. If it's
              small, you're most likely shy and modest.<br />
              If the cube is dug into the ground, it means you are a planner that thinks far into
              the future. If the cube is sitting on top of the ground, that means you're a very
              businesslike thinker.<br />
              A cube that is moving signifies that you are someone who thinks out of the box and
              avoids convention.
            </q-card-section>
          </q-expansion-item>
        </q-card>
      </div>

      <!-- Watermelon -->

      <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <q-card>
          <q-card-section>
            <img
              src="/Ladder.jpg"
              alt="Ladder"
              style="max-width: 100%; height: auto; display: block"
            />
          </q-card-section>
          <q-expansion-item
            expand-icon="keyboard_arrow_down"
            expanded-icon="keyboard_arrow_up"
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <template v-slot:header>
              <div class="text-h6 text-weight-bold">Ladder</div>
            </template>
            <q-card-section>
              If you've envisioned the ladder touching the cube, this means you're very connected to
              your friends and rely on them for support. If the ladder is detached, this means you
              prefer to be independent.<br />
              If the ladder is below the cube, your friends see you as an authority figure. If the
              cube is on the same level, you and your friends are equals. If the ladder is above the
              cube, this means you see your friends as authority figures in your life.<br />
              If the ladder is short, this means you prefer keeping a small circle of friends. If
              it's a long ladder, you're an extrovert with many friends and acquaintances.
            </q-card-section>
          </q-expansion-item>
        </q-card>
      </div>

      <!-- Grapes -->

      <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <q-card>
          <q-card-section>
            <img
              src="/Horse.jpg"
              alt="Horse"
              style="max-width: 100%; height: auto; display: block"
            />
          </q-card-section>
          <q-expansion-item
            expand-icon="keyboard_arrow_down"
            expanded-icon="keyboard_arrow_up"
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <template v-slot:header>
              <div class="text-h6 text-weight-bold">Horse</div>
            </template>
            <q-card-section>
              If the horse you imagined is a strong workhorse, that means your ideal partner is
              hardworking and reliable. If you've imagined a more delicate horse, that means your
              ideal partner is likely someone who takes pride in his or her appearance and enjoys
              being pampered.<br />
              If the horse is far away from the cube or moving in the opposite direction, this means
              you're distant from your present partner or far from attaining your ideal one.
            </q-card-section>
          </q-expansion-item>
        </q-card>
      </div>

      <!-- Kiwi -->

      <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <q-card>
          <q-card-section>
            <img
              src="/Storm.jpg"
              alt="Storm"
              style="max-width: 100%; height: auto; display: block"
            />
          </q-card-section>
          <q-expansion-item
            expand-icon="keyboard_arrow_down"
            expanded-icon="keyboard_arrow_up"
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <template v-slot:header>
              <div class="text-h6 text-weight-bold">Storm</div>
            </template>
            <q-card-section>
              Is the storm you imagined far off in the distance? That means you're living life with
              little worry. If the storm is close to the cube, you're ready to face conflict.<br />
              If the storm is directly over the cube, your troubles are overwhelming you right now.
            </q-card-section>
          </q-expansion-item>
        </q-card>
      </div>

      <!-- Apples -->

      <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <q-card>
          <q-card-section>
            <img
              src="/Flowers.jpg"
              alt="Flowers"
              style="max-width: 100%; height: auto; display: block"
            />
          </q-card-section>
          <q-expansion-item
            expand-icon="keyboard_arrow_down"
            expanded-icon="keyboard_arrow_up"
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <template v-slot:header>
              <div class="text-h6 text-weight-bold">Flowers</div>
            </template>
            <q-card-section>
              The number of flowers you imagined represent the number of children you would like to
              have. If the flowers are close to the cube, it means you desire a close relationship
              with your kids – or already have one.<br />
              If the flowers are far from the cube, this means you do not value having a close
              relationship with your kids.
            </q-card-section>
          </q-expansion-item>
        </q-card>
      </div>
    </div>
    <div
      class="row q-col-gutter-md"
      style="background-color: #e96b67; margin-top: 4px; padding-right: 16px; padding-bottom: 24px"
    >
      <div class="col-12 col-md-6">
        <q-card flat bordered style="width: 60%; max-width: 60%; margin: 0 auto">
          <q-expansion-item
            expand-icon="keyboard_arrow_down"
            expanded-icon="keyboard_arrow_up"
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <template v-slot:header>
              <div class="text-subtitle1 text-weight-bold">Related Resources</div>
            </template>
            <q-card-section>
              <div class="text-weight-bold">Teal Swan Article</div>
              <a
                href="https://tealswan.com/resources/articles/the-cube-test-r450/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Cube Test article
              </a>
            </q-card-section>
            <q-card-section>
              <div class="text-weight-bold">Neil Strauss</div>
              <a
                href="https://youtu.be/quZzZykpOPA?si=GW60pebYnSbc7iB5"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Cube - A Psychology Game - performed by Neil Strauss
              </a>
            </q-card-section>

            <q-card-section>
              <div class="text-weight-bold">The Cube Psychology Test to Attract Girls</div>
              <a
                href="https://youtu.be/XS35MbPh31Q?si=05krSDVnI1ofqGMa"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Cube Psychology Test to Attract Girls
              </a>
            </q-card-section>
          </q-expansion-item>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card style="width: 60%; max-width: 60%; margin: 0 auto">
          <q-card-section>
            <div class="text-h6 text-weight-bold">The Cube</div>
          </q-card-section>
          <div style="width: 100%; max-width: 100%">
            <q-video
              src="https://www.youtube.com/embed/5FIPIuw5KXY?si=o6BYI5lLmV9AH4YU"
              :ratio="16 / 9"
            />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DefinitionsPage',
}
</script>
