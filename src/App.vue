<style lang="scss">

// palette
$black:       #253031;
$blue-grey:   #587291;
$dark-blue:   #2f97c1;
$medium-blue: #1ccad8;
$teal:        #15e6cd;
$green:       #0cf574;

body {
  margin: 0;
}

.app-container {
  background-color: $black;
  
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
}

.keynote {
  width: 100%;
  height: 100%;
  max-height: 100%;
}

.slide-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100%;
}

.slide {
  width: 100%;
  height: 100%;
  max-height: 100%;
  
  font-family: 'Quicksand';
  font-size: 1.5em;
  color: $dark-blue;
  text-align: center;
  
  .meme {
    position: relative;
    left: 20%;
    top: -20%;
    width: 45%;
    height: auto;
  }
  
  h1, h2 {
    font-family: 'Mogra';
    margin-top: 0.33em;
    margin-bottom: 0.33em;
  }
  
  h1 {
    font-size: 3.5em;
    color: $green;
    
    &.title {
      position: relative;
      left: -25%;
      width: 45%;
      
      margin-bottom: 10%;
      text-align: left;
    }
  }
  
  h2 {
    font-size: 2.5em;
    color: $teal;
  }
}

table {
  background-color: rgba(255, 255, 255, 0.05);
  
  border: 0;
  border-collapse: collapse;
  
  margin: 5%;
}

tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

th:nth-child(even),
td:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}

td:not(:first-child) {
  font-size: 1em;
}

.hidden {
  visibility: hidden;
}

// slide specific styles

.differences {
  img {
    width: 50%;
    height: auto;
  }
}
</style>


<template>
  <div class="app-container">
    <Keynote>
      <!-- Intro slide -->
      <Slide class="no-margin title">
        <h1 class="title">OS Agnosticism</h1>
        <div class="meme">
          <img src="./assets/confuse-doggo.jpg" alt="doggo do a bamboozle">
          <p>... Huh?</p>
        </div>
      </Slide>
      <!-- OS Differences slide -->
      <Slide class="no-margin differences">
        <h1 class="title">Differences</h1>
        <img class="meme" src="./assets/doggo-guide.jpg" alt="guide to doggos">
        <table>
          <thead>
            <th></th>
            <th>Windows</th>
            <th>*nix (macOS >= 10, Linux, Unix)</th>
            <th>macOS < 10</th>
          </thead>
          <tbody>
            <tr>
              <td>CLI</td>
              <td>DOS, PowerShell, Bash (on Windows 10 with Windows Subsystem for Linux)</td>
              <td>Bash</td>
              <td>¯\_(ツ)_/¯</td>
            </tr>
            <tr>
              <td>Terminals</td>
              <td>cmd.exe, PowerShell.exe (alternatives like ConEmu or Cmder)</td>
              <td>Terminal (each distro/OS are a bit different)</td>
              <td>¯\_(ツ)_/¯</td>
            </tr>
            <tr>
              <td>Newlines</td>
              <td>CRLF</td>
              <td>LF</td>
              <td>CR</td>
            </tr>
          </tbody>
        </table>
      </Slide>
      <!-- Team Impact slide -->
      <Slide class="no-margin impact">
        <h1 class="title">Team Impact</h1>
        <div class="meme">
          <img src="./assets/computer-doggo.jpg" alt="computer doggo">
          <p>"What's this mean for me?"</p>
        </div>
      </Slide>
      <!-- Last slide to capture Keynote message -->
      <<Slide></Slide>
    </Keynote>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
