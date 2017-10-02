<style lang="scss">
@import 'scss/palette';
@import 'scss/table-styles';

body {
  margin: 0;
}

.app-container {
  background-color: $black;
  
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  
  overflow: hidden;
}

.keynote {
  width: 100%;
  height: 100%;
}

.slide-wrapper {
  width: 100%;
  height: 100%;
}

.slide {
  width: 100%;
  height: 100%;
}

.left {
  text-align: left;
}

.hidden {
  visibility: hidden;
}
</style>


<template>
  <div class="app-container">
    <Keynote>
      <!-- Intro slide -->
      <Slide class="no-margin title">
        <SlideTitle>OS Agnosticism</SlideTitle>
        <SlideContent>
            <img src="./assets/confuse-doggo.jpg" alt="doggo do a bamboozle">
            <p class="caption">... Huh?</p>
        </SlideContent>
      </Slide>
      <!-- OS Differences slide -->
      <Slide class="no-margin differences">
        <SlideTitle>Differences</SlideTitle>
        <SlideContent>
          <div class="img-container lg move-up">
            <img class="meme" src="./assets/doggo-guide.jpg" alt="guide to doggos">
          </div>
          <p class="left">
            During development team members with different operating systems may have to perform
            setup differently.
          </p>
          <p class="left">
            For example, a Windows user will have a difficult time executing
            a Bash script, while a macOS user might have difficulty with some .NET installations.
          </p>
          <p class="left">
            Some other differences the operating systems have that developers would likely notice are listed below.
          </p>
          <table>
            <col style="width: 15%">
            <col style="width: 25%">
            <col style="width: 20%">
            <col style="width: 15%">
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
        </SlideContent>
      </Slide>
      <!-- Other Issues slide -->
      <Slide>
        <SlideTitle>Other Potential Issues</SlideTitle>
        <SlideContent>
          <div class="img-container lg">
            <img src="./assets/stuck-doggo.jpg" alt="doggo in heckin predicament">
            <p class="caption">"Am in smol trouble fren. Heckin stuck"</p>
          </div>
          <p class="left">
            Macs and Linux machines tend to be more tolerant of foreign file systems.
            For example, if your NAS server is formatted in ext4 instead of NTFS
            a Windows machine is unlikely to be able to read any of the volumes.
          </p>
          <p class="left">
            The same goes for sharing files with any sort of external hard drive or
            flash drive. They should be formatted with NTFS or FAT32 in order to ensure
            compatibility between the two systems.
          </p>
          <p class="left">
            Windows machines may also have an issue printing through a print server depending
            on how it was set up.
          </p>
        </SlideContent>
      </Slide>
      <!-- Team Impact slide -->
      <Slide class="no-margin impact">
        <SlideTitle>Team Impact</SlideTitle>
        <SlideContent>
          <div class="img-container">
            <img src="./assets/computer-doggo.jpg" alt="computer doggo">
            <span class="caption">"What's this mean for me?"</span>
          </div>
          <p class="left">
            Your personal device likely doesn't have to be set up any differently for most
            tasks. Most issues that occur between systems is usually an issue with a peripheral
            or server that you need to connect to.
          </p>
          <p class="left">
            The larger issues you will likely run into with different systems is different application
            setup. For example, if you have an ASP.NET project, until recently it was difficult and sometimes
            impossible to set up that project without any issues on a Mac. Now, however, its more doable.
            On windows all you really need to do is open the Visual Studio solution, hit run and you're good to go.
            Whereas macOS requires .NET Core, and a generally different and slightly more involved setup process
            than on Windows.
          </p>
          <p class="left">
            Another thing to watch out for is the differences in editors. Different editors may have different defaults
            and if you're not careful may change the line endings of the code you just pulled down from GitHub. Anyone
            who has to review a pull request with 100,000 lines changed where 99,500 of them were line ending changes
            likely won't be pleased.
          </p>
        </SlideContent>
      </Slide>
      <!-- Mitigation slide -->
      <Slide>
        <SlideTitle>Mitigation</SlideTitle>
        <SlideContent>
          <div class="img-container">
            <img src="./assets/happy-doggo.jpg" alt="doggo doin a happy">
            <p class="caption">When everything finally works.</p>
          </div>
          <p class="left">
            Windows not being able to read volumes can be solved by formatting all
            external file storage as NTFS.
          </p>
          <p class="left">
            Printing will also likely not be an issue if you interface with the printer
            directly instead of through a print server of some sort.
          </p>
          <p class="left">
            As long as the project isn't dependent on a peripheral of some sort this can
            be solved by just supplying your own peripherals. Everyone has their own tastes anyway!
          </p>
          <p class="left">
            In order to lighten the frustration of project setup, we should attempt to either make a universal
            setup process, or create and document the different setup steps for each OS as needed.
          </p>
          <p class="left">
            Problems between editors are generally easily solved now. Most editors have settings you can change
            for things that differ by OS, such as line endings. There is also Editorconfig, which you can add
            to your editor as a plugin and it will make sure that files match the specified config across any editor
            that Editorconfig has a plugin for (which is nearly every modern editor).
          </p>
        </SlideContent>
      </Slide>
      <!-- Last slide to capture Keynote message -->
      <Slide>
        <SlideTitle>That's it!</SlideTitle>
      </Slide>
    </Keynote>
  </div>
</template>

<script>
import components from './components';

export default {
  name: 'app',
  components
}
</script>
