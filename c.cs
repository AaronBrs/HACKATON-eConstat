using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vector.CANoe.Runtime;
using Vector.CANoe.Threading;

namespace CANoeApiExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create a new CANoe application object
            CANoe.Application canApp = new CANoe.Application();

            // Open a CANoe configuration file
            CANoe.Configuration cfg = canApp.Open(@"C:\MyCANoeConfig.cfg");

            // Connect to the CANoe measurement object
            CANoe.Measurement meas = cfg.Measurement;

            // Start the measurement
            meas.Start();

            // Get the CAN bus object
            CANoe.Bus canBus = cfg.GetBus("CAN");

            // Get the CAN channel object
            CANoe.Channel canChannel = canBus.GetChannel(1);

            // Define the frame ID
            uint frameId = 0x123;

            // Define the frame data
            byte[] frameData = new byte[] { 0x01, 0x02, 0x03, 0x04 };

            // Create the CAN frame
            CANoe.Frame canFrame = new CANoe.Frame(frameId, frameData.Length, frameData);

            // Send the CAN frame
            canChannel.Send(canFrame);

            // Create a receive handler for the CAN frame
            CANoe.ReceiveHandler canRxHandler = new CANoe.ReceiveHandler(canChannel, frameId);

            // Wait for the CAN frame to be received
            canRxHandler.Wait(1000); // Wait for 1 second

            // Check if the CAN frame was received
            if (canRxHandler.Received)
            {
                // Get the received CAN frame
                CANoe.Frame receivedFrame = canRxHandler.Frame;

                // Print the received frame data
                Console.WriteLine("Received frame: ID={0:X}, Data={1}", receivedFrame.Id, BitConverter.ToString(receivedFrame.Data));
            }
            else
            {
                // Print an error message
                Console.WriteLine("Error: frame not received");
            }

            // Stop the measurement
            meas.Stop();

            // Close the CANoe application object
            canApp.Quit();
        }
    }
}
